import {Node} from '../node';
import {Element} from '../element'
import {DrawType} from '../enum/draw-type';
import {Position} from '../types/base';

export default class Edge extends Element {
    private source: Node;
    private target: Node;

    constructor(source: Node, target: Node) {
        super();
        this.source = source
        this.target = target
    }

    private getStartAndEndPostion(): { start: Position, end: Position } | undefined {
        const start = this.source.getLinkPointer(this.target);
        const end = this.target.getLinkPointer(this.source);

        if (start === undefined || end === undefined) {
            return void 0;
        }

        return {start, end}
    }


    private drawHot(ctx: CanvasRenderingContext2D) {
        const startAndEnd = this.getStartAndEndPostion();
        if (startAndEnd) {
            const {start, end} = startAndEnd;
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y)
            ctx.lineWidth = 1;
            ctx.strokeStyle = "red";
            ctx.stroke();
        }

    }

    private drawSelect(ctx: CanvasRenderingContext2D) {

    }

    public draw(ctx: CanvasRenderingContext2D, type: DrawType) {

        switch (type) {
            case DrawType.hot:
                this.drawHot(ctx);
                break;
            case DrawType.select:
                this.drawSelect(ctx);
                break;
            default:
                break;
        }
    }
}