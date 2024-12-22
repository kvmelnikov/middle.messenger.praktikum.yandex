import Block from "../../framework/Block";
import { ChatParticipant } from "./chat-participant/chat-participant";
import { HeaderLeftPanel } from "./header-left-panel/header-left-panel";

const allChatParticipant = [...new Array(2).keys()].map(item => new ChatParticipant({ time: `23.5${item}`, name: `${item + 1}Имя` }))

export class LeftPanel extends Block {
    constructor() {
        super({
            HeaderLeftPanel: new HeaderLeftPanel({
                events:{
                    keydown: (e: Event) => {
                        e.preventDefault()
                        this.onFilteredParticipant(e)      
                    } 
                }}),
            ChatParticipants: allChatParticipant
        })
    }

    onFilteredParticipant(e: Event): void { 
        console.log(e)
    }

    override render(): string {
        return `<section class="left-panel">
                  {{{ HeaderLeftPanel }}}
                  {{{ ChatParticipants }}}
                </section>`
    }
}
