declare module 'stats-js' {
    class Stats {
        new(): this;

        public dom: HTMLElement;

        public showPanel(type: number): void;

        public begin(): void;

        public end(): void;

    }

    export default Stats;
}