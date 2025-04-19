import Block from "../../framework/Block";
import { CounterMessage } from "../counter-message/counter-message";
import { Time } from "../time/time";
interface ChatParticipantProps {
  id: number;
  time: string | null;
  unread_count: number;
  avatar: string | null;
}
export class ChatParticipant extends Block {
  isActive: false;
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
        click: (e: Event) => {
          this.activeChat();
        },
      },
    });
  }

  activeChat() {
    this.setProps({
      isActive: true,
    });
  }

  override render(): string {
    return ` {{#if isActive}}
              <article class="chat-participant chat-participant_active">
              {{else}}
              qdsfda
              <article class="chat-participant">
              {{/if}} 
                {{{ Avatar }}}
                    <div class="chat-participant__message">
                        <p class="chat-participant__name">{{name}}</p>
                        <p class="chat-participant__text-message">Друзья, у меня для вас особенный выпуск новостей!</p>
                    </div> 
                <div class="chat-participant__time">
                {{{ Time }}}
                {{{ CounterMessage }}}
                </div>  
                </article>`;
  }
}
