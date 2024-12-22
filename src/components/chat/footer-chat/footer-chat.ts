import Block from "../../../framework/Block";

export class FooterChat extends Block {
    constructor(){
        super()
    }

    override render(): string {
        //return `<div class="footer-chat">{{{ ChatForm}}}</div>`
         return `<div class="footer-chat">форма чата</div>`
    }
}
