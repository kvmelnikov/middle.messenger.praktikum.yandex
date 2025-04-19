import Block, { BlockProps } from "../../framework/Block";
import connect from "../../framework/HOC";
import { IChat } from "../../shared/chat.interface";
import { ChatParticipant } from "../chat-participant/chat-participant";

interface LeftPanelProps extends BlockProps {
  value?: string;
  number?: 2;
  chats: IChat[];
  loaded: string;
}

class LeftPanel extends Block {
  constructor(props: LeftPanelProps) {
    super({
      //   HeaderLeftPanel: new HeaderLeftPanel({
      //     // InputSearch: new Input({
      //     //   class: "input-search",
      //     //   dataInput: dataInput,
      //     //   onKeyup: (e: KeyboardEvent) => {
      //     //     if (e.key === "Enter") {
      //     //       // this.onSearch();
      //     //     }
      //     //   },
      //     // }),
      //   }),
      ChatParticipants: props.chats.map(
        (chat) => new ChatParticipant({ time: chat.created_by })
      ),
    });
  }

  protected render(): string {
    return `<section  class="left-panel">                
                 {{{ HeaderLeftPanel }}}
                 {{{ ChatParticipants }}}
            </section>`;
  }
}

const mapStateToProps = (state: BlockProps): LeftPanelProps => {
  const chatsInfo = [
    {
      id: 58223,
      title: "dafddaf",
      avatar: null,
      created_by: 3586,
      unread_count: 0,
      last_message: null,
    },
    {
      id: 58075,
      title: "daf",
      avatar: null,
      created_by: 3586,
      unread_count: 0,
      last_message: null,
    },
  ];

  //const chats: Record<string, string[]> = chatsInfo.map((chat) => re{});

  const chats = chatsInfo?.map((chat) => {
    return new ChatParticipant({
      time: chat.created_by.toString() || "",
      count: chat.unread_count,
      name: chat.title,
    });
  });

  return { chats: chats, loaded: chatsInfo ? chatsInfo[0].title : "null" };
};

export default connect(LeftPanel, mapStateToProps);
