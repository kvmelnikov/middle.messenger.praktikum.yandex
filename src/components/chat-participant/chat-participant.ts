import Block from "../../framework/Block";
import { setCurrentChatId } from "../../store/actions/chat.actions";
import messagesController, {
  MessagesController,
} from "../../store/controllers/message.controller";
import { CounterMessage } from "../counter-message/counter-message";
import { Time } from "../time/time";
import { Modal } from "../modal/modal";
import { DialogAvatarChat } from "../dialog-avatar-chat/dialog-avatar-chat";
import { AvatarChatParticipant } from "../avatar-chat-participant/avatar-chat-participant";
import { ChatService } from "../../store/services/chat.service";
import { SvgIcon } from "../svg-icon/svg-icon";
import { DialogConfirm } from "../dialog-confirm/dialog-confirm";
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

  chatService: ChatService;

  constructor(props: ChatParticipantProps) {
    super({
      ...props,
      DeleteChat: new SvgIcon({
        path: "../../../public/images/delete-user.png",
        height: "15px",
        width: "15px",
        alt: "управление профилем",
        onClick: (e: Event) => {
          e.stopPropagation();
          this.openModalConfirm();
        },
      }),
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
      ModalConfirm: new Modal({
        className: "modal",
        dialog: new DialogConfirm({
          heading: "Удалить чат",
          onDelete: () => {
            this.onDeleteChat();
          },
          onCancel: () => {
            this.openModalConfirm();
          },
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
    this.chatService = new ChatService();
  }

  openModalAvatar() {
    const modal = this.getChildren("Modal");

    if (modal && !this.isShow) {
      this.isShow = true;
      modal.show();
    } else {
      modal.hide();
      this.isShow = false;
    }
  }

  openModalConfirm() {
    const modal = this.getChildren("ModalConfirm");

    if (modal && !this.isShow) {
      this.isShow = true;
      modal.show();
    } else {
      this.isShow = false;
      modal.hide();
    }
  }

  onDeleteChat() {
    this.chatService.deleteChat(this.props.chatId);
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
                <div class="chat-participant__delete">
                  {{{ DeleteChat }}}
                </div>
                {{{ Modal }}}
                {{{ ModalConfirm }}}
                
            </article>`;
  }
}
