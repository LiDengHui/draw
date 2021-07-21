import {DrawType} from './enum/draw-type';
import {Node} from './node';
import {getColorOfRgba, getRandomColor} from './utils/color';
import Stats from 'stats-js';
import {Edge} from './edge';

var stats = new Stats();

stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

interface DrawOptions {
    el: HTMLElement | null
}

export class Draw {
    private $el!: HTMLElement;
    private $canvas!: HTMLCanvasElement;
    private $ctx!: CanvasRenderingContext2D;
    options: DrawOptions;

    //  缓存colorId对应的node
    private elementMap: Map<string, Node | Edge> = new Map();

    private dpr: number = 1;
    private nodes: Node[] = [];
    private edges: Edge[] = [];
    private select: Array<Node | Edge> = [];

    constructor(options: DrawOptions) {
        this.options = options || {};
        if (options.el) {
            this.$el = options.el;
        } else {
            throw new Error(`parent el is ${options.el}`)
        }
        this.createCanvas();

        this.addClickEvent();
    }

    createCanvas() {
        this.$canvas = document.createElement('canvas') as HTMLCanvasElement
        const width = this.$el.offsetWidth;
        const height = this.$el.offsetHeight;
        this.$canvas.width = width;
        this.$canvas.height = height;
        this.$el.append(this.$canvas);
        this.$ctx = this.$canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    public getElement() {
        return this.$el;
    }

    private getColorId(): string {
        let color: string = getRandomColor();
        let count = 0;
        while (this.elementMap.has(color)) {
            if (count > 1000) throw new Error('color is not enought usage')
            color = getRandomColor();
            count++;
        }

        return color;
    }

    private setNodeColorId(node: Node) {
        const color = this.getColorId();
        node.setColorId(color);
        this.elementMap.set(color, node)
    }

    private setEdgeColorId(edge: Edge) {
        const color = this.getColorId();
        edge.setColorId(color);
        this.elementMap.set(color, edge)
    }


    public addNode(node: Node) {
        this.setNodeColorId(node);
        this.nodes.push(node);
    }

    public addEdge(edge: Edge) {
        this.setEdgeColorId(edge);
        this.edges.push(edge);
    }

    public selectNodes(nodes: Node[]) {
        this.select = nodes;
    }

    public clearDraw() {
        this.$ctx.save();
        this.$ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
        this.$ctx.restore();
    }

    private running = false;

    private _draw() {
        stats.begin();
        this.clearDraw();
        this.$ctx.save();

        this.elementMap.forEach((element: Node | Edge) => {
            let type: DrawType;
            if (this.select.includes(element)) {
                type = DrawType.select;
            } else {
                type = DrawType.hot;
            }
            element.draw(this.$ctx, type)
        });
        this.$ctx.restore();
        stats.end();
        this.running = false;
    }

    public draw() {
        if (!this.running) {
            this.running = true;
            this._draw()
        }
    }

    public addClickEvent() {

        const mouseDownListener = (mouseEvent: MouseEvent) => {
            const color = this.getEventColor(mouseEvent);
            const node = this.elementMap.get(color);
            if (node instanceof Node) {
                this.selectNodes([node]);
                node.startMove({
                    x: mouseEvent.offsetX,
                    y: mouseEvent.offsetY
                });
                this.draw();
            }
        }


        const mouseMoveListener = (mouseEvent: MouseEvent) => {
            let node: Node | Edge | undefined = this.select[0]
            if (node instanceof Node && node.moveStatus) {
                node.move(mouseEvent.offsetX, mouseEvent.offsetY);
                this.draw();
            }
            node = undefined;
        }

        const mouseUpListener = (mouseEvent: MouseEvent) => {
            const node = this.select[0]
            if (node instanceof Node) {
                node.endMove();
            }
        }


        this.$canvas.addEventListener('mousedown', mouseDownListener)
        this.$canvas.addEventListener('mousemove', mouseMoveListener);
        this.$canvas.addEventListener('mouseup', mouseUpListener);
        this.$canvas.addEventListener('mouseout', mouseUpListener);

    }


    public getEventColor(event: MouseEvent) {
        const x = event.offsetX;
        const y = event.offsetY;
        const imagedates = this.$ctx.getImageData(x, y, 1, 1);
        const pixel = imagedates.data;
        return getColorOfRgba(Array.from(pixel));
    }

}


const draw = new Draw({
    el: document.getElementById('draw')
});

const node1 = new Node({
    x: 0,
    y: 0
})
draw.addNode(node1)

const node2 = new Node({
    x: 300,
    y: 300
})
draw.addNode(node2)


draw.selectNodes([node1])

const edge = new Edge(node1, node2);

draw.addEdge(edge);

draw.draw();



