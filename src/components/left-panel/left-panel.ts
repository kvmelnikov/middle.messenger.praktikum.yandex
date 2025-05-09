import Block, { BlockProps } from "../../framework/Block";
import connect from "../../framework/HOC";
import { IChat } from "../../shared/chat.interface";
import { ChatParticipant } from "../chat-participant/chat-participant";
import HeaderLeftPanel from "../header-left-panel/header-left-panel";

interface LeftPanelProps extends BlockProps {
  chats?: ChatParticipant[];
  userId?: number;
}

class LeftPanel extends Block {
  constructor(props: LeftPanelProps) {
    super({
      ...props,
      HeaderLeftPanel: new HeaderLeftPanel({}),
    });
  }

  protected render(): string {
    return `<section  class="left-panel"> 
                  {{{ HeaderLeftPanel }}}               
                 {{{ chats }}}
            </section>`;
  }
}

const mapStateToProps = (state: BlockProps): LeftPanelProps => {
  const chats = state.chats?.map(
    (chat: IChat) =>
      new ChatParticipant({
        time: chat.last_message ? chat.last_message.time : null,
        unread_count: chat.unread_count,
        chatId: chat.id,
        userId: state.user.id as number,
        avatar: chat.avatar
          ? `https://ya-praktikum.tech/api/v2/resources/${chat.avatar}`
          : null,
        title: chat.title,
      })
  );

  console.log("chats", state.chats);

  return { chats };
};

export default connect(LeftPanel, mapStateToProps);
