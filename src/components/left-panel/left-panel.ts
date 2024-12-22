import Block from "../../framework/Block";
import { ChatParticipant } from "./chat-participant/chat-participant";
import { HeaderLeftPanel } from "./header-left-panel/header-left-panel";

export class LeftPanel extends Block {
    constructor() {
        super({
            HeaderLeftPanel: new HeaderLeftPanel(),
            ChatParticipant: new ChatParticipant()
        })
    }

    override render(): string {
        return `<section class="left-panel">
                  {{{ HeaderLeftPanel }}}
                  {{{ ChatParticipant }}}
                </section>`
    }
}
