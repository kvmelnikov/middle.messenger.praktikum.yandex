import Block from "../../../framework/Block";

export class WorkspaceChat extends Block {
    constructor(){
        super({
            
        })
    }


    override render(): string {
        return `<div class="workspace-chat">
                    {{{ DateMessage}}}
                    {{{ Message}}}
                    <p>По ссылке содержатся сверстаные тултипы и модальные окна</p>
                    {{{ Link data-page="auxiliaryElements" data-action="default" text="Вспомогательные компоненты" class="link link-login" }}}
                </div>`
    }
}
