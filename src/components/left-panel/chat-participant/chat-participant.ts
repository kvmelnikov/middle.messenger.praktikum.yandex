import Block from "../../../framework/Block";
import { Time } from "../../time/time";

export class ChatParticipant extends Block {
    constructor(props: any){
        super({...props,
          Time: new Time({time: props.time}),
          name: props.name  
        })
    }

    override render(): string {
        return `<article class="chat-participant">
                {{{ Avatar src="../../../public/images/avatar-example.png" class="avatar_medium" }}}
                    <div class="chat-participant__message">
                        <p class="chat-participant__name">{{name}}</p>
                        <p class="chat-participant__text-message">Друзья, у меня для вас особенный выпуск новостей!</p>
                    </div> 
                <div class="chat-participant__time">
                {{{ Time }}}
                {{{ CounterMessage }}}
                </div>  
                </article>`
    }
}
