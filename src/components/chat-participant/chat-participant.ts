import Block from "../../framework/Block";
import { setCurrentChatId } from "../../store/actions/chat.actions";
import messagesController, {
  MessagesController,
} from "../../store/controllers/message.controller";
import { CounterMessage } from "../counter-message/counter-message";
import { Time } from "../time/time";
import { Modal } from "../modal/modal";
import { DialogAvatarChat } from "../dialog-avatar-chat/dialog-avatar-chat";
import AvatarChatParticipant from "../avatar-chat-participant/avatar-chat-participant";

interface ChatParticipantProps {
  chatId: number;
  userId: number;
  time: string | null;
  unread_count: number;
  avatar: string | null;
  title: string;
}
export class ChatParticipant extends Block {
  messagesController: MessagesController;

  constructor(props: ChatParticipantProps) {
    super({
      ...props,
      Avatar: new AvatarChatParticipant({
        className: "avatar avatar_small",
        src: props.avatar || "",
        onClick: (e) => {
          e.stopPropagation();
          this.openModalAvatar();
        },
      }),
      Modal: new Modal({
        className: "modal",
        dialog: new DialogAvatarChat({
          heading: "Выберите аватар",
          chatId: props.chatId,
        }),
        onClick: () => {},
      }),
      Time: new Time({ time: props.time || "" }),
      CounterMessage: new CounterMessage({
        counter: props.unread_count,
      }),

      events: {
        click: (e: Event) => {
          e.stopPropagation();
          this.messagesController
            .connect(props.chatId)
            .then(() => {
              setCurrentChatId(props.chatId);
            })
            .catch((error) => {
              console.error("Ошибка при подключении:", error);
            });
        },
      },
    });
    this.messagesController = messagesController;
  }

  openModalAvatar() {
    const modal = this.getChildren("Modal");

    if (modal && !this.isShow) {
      modal.show();
    } else {
      modal.hide();
    }
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
                {{{ Modal }}}
                </div>  
            </article>`;
  }
}
