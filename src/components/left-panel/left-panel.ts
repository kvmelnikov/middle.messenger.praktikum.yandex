import Block from "../../framework/Block";

export class LeftPanel extends Block {
    constructor() {
        super({})
    }

    protected render(): string {
        return `<section class="left-panel">
                  {{{ HeaderLeftPanel}}}
                  {{{ ChatParticipant}}}
                </section>`
    }
}
