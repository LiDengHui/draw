export default class Element {
    private colorId: string | undefined;

    constructor() {
    }

    public setColorId(color: string) {
        this.colorId = color;
    }

    public getColorId() {
        return this.colorId;
    }
}