import Block from "../../framework/Block";
import { CounterMessage } from "../counter-message/counter-message";
import { Time } from "../time/time";
interface ChatParticipantProps {
  id: number;
  time: string | null;
  unread_count: number;
  avatar: string | null;
  title: string;
}
export class ChatParticipant extends Block {
  constructor(props: ChatParticipantProps) {
    super({
      ...props,
      Time: new Time({ time: props.time || "" }),
      // Avatar: new Avatar({
      //   src: "../../../public/images/avatar-example.png",
      //   className: "avatar_medium",
      // }),
      CounterMessage: new CounterMessage({
        counter: props.unread_count,
      }),
      events: {
        click: (e: Event) => {},
      },
    });
  }

  override render(): string {
    return ` 
    
              <article class="chat-participant">
                {{{ Avatar }}}
                    <div class="chat-participant__message">
                        <p class="chat-participant__name">{{name}}</p>
                        <p class="chat-participant__text-message">{{title}}</p>
                    </div> 
                <div class="chat-participant__time">
                {{{ Time }}}
                {{{ CounterMessage }}}
                </div>  
                </article>`;
  }
}
