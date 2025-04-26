import Block from "../../framework/Block";
import { setCurrentChatId } from "../../store/actions/chat.actions";
import chatService, { ChatService } from "../../store/services/chat.service";
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
  chatService: ChatService;
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
          setCurrentChatId(props.id);
          this.chatService.GetChatUserToken(props.id);
        },
      },
    });
    this.chatService = chatService;
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
