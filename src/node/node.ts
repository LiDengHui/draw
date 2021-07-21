import {DrawType} from "../enum/draw-type";
import {Element} from '../element';
import {Position} from "../types/base";


export interface NodeOptions {
    x: number;
    y: number;
    width?: number;
    height?: number;
}

export default class Node extends Element {
    private x: number
    private y: number
    private width: number;
    private height: number;
    public moveStatus = false;

    constructor(options: NodeOptions) {
        super();
        this.x = options.x;
        this.y = options.y;
        this.width = options.width || 80;
        this.height = options.height || 40;
    }


    public setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getPosition() {
        return {
            x: this.x,
            y: this.y
        }
    }

    public getCenter() {
        const x = this.x + this.width / 2;
        const y = this.y + this.height / 2;
        return {
            x,
            y
        }
    }


    public getLinkPointer(target: Node): Position | undefined {
        const {x: x1, y: y1} = this.getCenter();
        const {x: x2, y: y2} = target.getCenter();
        const w = this.width + 2;
        const h = this.height + 2;

        const k1 = h / w;
        const k2 = -h / w;

        const h1 = y2 - y1;
        const w1 = x2 - x1;
        const k = -h1 / w1;

        let x;
        let y;
        if ((k <= k2 && h1 >= 0 && w1 >= 0) ||
            (k >= k1 && h1 >= 0 && w1 <= 0)) {
            // 下
            x = x1 + w1 / h1 * h / 2
            y = y1 + h / 2;
        } else if ((k >= k1 && h1 <= 0 && w1 >= 0) ||
            (k <= k2 && h1 <= 0 && w1 <= 0)) {
            // 上
            x = x1 - w1 / h1 * h / 2
            y = y1 - h / 2
        } else if ((k >= k2 && h1 <= 0 && w1 <= 0) ||
            (k <= k1 && h1 >= 0 && w1 <= 0)) {
            // 左
            y = y1 - h1 / w1 * w / 2
            x = x1 - w / 2
        } else {
            // 右
            y = y1 + h1 / w1 * h / 2
            x = x1 + w / 2
        }

        if ((((x2 - target.width / 2) <= x) && (x <= (x2 + target.width / 2) && (y2 - target.height / 2 <= y) && (y <= y2 + target.height / 2)))) {
            return void 0;
        }

        return {x, y};
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

    private drawHot(ctx: CanvasRenderingContext2D) {
        const colorId = this.getColorId();
        if (colorId) {
            ctx.fillStyle = colorId;
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    private drawSelect(ctx: CanvasRenderingContext2D) {
        this.drawHot(ctx);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x - 1, this.y - 1, this.width + 2, this.height + 2);
    }

    private startMousePosition: Position | undefined;
    private startPosition: Position | undefined;

    public startMove(position: Position) {
        this.startMousePosition = position;
        this.startPosition = {
            x: this.x,
            y: this.y
        }
        this.moveStatus = true;
    }

    public move(x: number, y: number) {

        if (this.moveStatus && this.startMousePosition && this.startPosition) {
            const startX = this.startMousePosition.x;
            const startY = this.startMousePosition.y;

            const endX = this.startPosition.x + x - startX;
            const endY = this.startPosition.y + y - startY;
            this.setPosition(endX, endY)
        }

    }

    public endMove() {
        this.moveStatus = false;
        this.startPosition = undefined;
        this.startMousePosition = undefined;
    }


}