import Block from "../../framework/Block";
import connect from "../../framework/HOC";
import { Message } from "../message/message";
import { IMessage } from "../../shared/message.interface";

interface ChatWorkSpaceProps {
  messages?: Message[];
}

class ChatWorkSpace extends Block {
  constructor(props: ChatWorkSpaceProps) {
    super({ ...props });
  }

  protected override render(): string {
    return ` 
            <div class="workspace-chat">
                {{{ messages }}}
            </div>
            `;
  }
}

const mapStateToProps = (state: any): ChatWorkSpaceProps => {
  const messagesData = state.messages as Record<number, IMessage[]>;
  const currentChatId = state.currentChatId as number;

  let messages: Message[] = [];

  if (messagesData?.hasOwnProperty(currentChatId)) {
    messages = messagesData[currentChatId].map((message) => {
      return new Message({
        time: message.time,
        text: message.content,
        currentUserId: state.user.id as number,
        owner: message.user_id,
      });
    });
  }

  return { messages };
};

export default connect(ChatWorkSpace, mapStateToProps);
