import Block from "../../../framework/Block";

export class ChatParticipant extends Block {
    constructor(){
        super({})
    }

    override render(): string {
        return `<article class="chat-participant">
                {{{ Avatar src="../../../public/images/avatar-example.png" class="avatar_medium" }}}
                    <div class="chat-participant__message">
                        <p class="chat-participant__name">Андрей</p>
                        <p class="chat-participant__text-message">Друзья, у меня для вас особенный выпуск новостей!</p>
                    </div> 
                <div class="chat-participant__time">
                {{{ Time }}}
                {{{ CounterMessage }}}
                </div>  
                </article>`
    }
}
