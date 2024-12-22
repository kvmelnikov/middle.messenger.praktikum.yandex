import Block from "../../../framework/Block";

export class FormChat extends Block {
    constructor(){
        super()
    }

     override render(): string {
        return `<form class="chat-form" >
    {{{ SvgIcon path="../../../public/svg/clip.svg" height="32px"  name="скребка" }}}
    <input placeholder="Сообщение" class="input chat-form__input-message" type="text">
    {{{ ButtonIcon class="button-icon-right" data-page="mainPaige" }}} 
</form>`   
    }
}
