import Block, { BlockProps } from "../../framework/Block";
import connect from "../../framework/HOC";
import { IChatUser } from "../../shared/chat-user.interface";

import chatService, { ChatService } from "../../store/services/chat.service";

interface UserParticipantProps {
  id?: number;
  chatId?: number;
  name?: string;
}

export class UserParticipant extends Block {
  chatService: ChatService;
  constructor(props: UserParticipantProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          e.stopPropagation();
          const data: IChatUser = {
            users: [props.id || 0],
            chatId: props.chatId || 0,
          };
          this.chatService.addUserToChat(data);
        },
      },
    });
    this.chatService = chatService;
  }

  override render(): string {
    return `<li class="user">
                {{name}}
            </li>`;
  }
}

const mapStateToProps = (state: BlockProps): UserParticipantProps => {
  const chatId = state.currentChatId as number;

  return { chatId };
};
export default connect(UserParticipant, mapStateToProps);
