import LeftPanel from "../../components/left-panel/left-panel";
import Block, { BlockProps } from "../../framework/Block";
import serviceChat, { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";
import Chat from "../../components/chat/chat";
interface MainPageProps {}

class MainPage extends Block {
  serviceChat: ChatService;
  constructor() {
    super({
      LeftPanel: new LeftPanel({}),
      Chat: new Chat({}),
    });

    this.serviceChat = serviceChat;

    this.serviceChat.getChats();
  }

  protected override render(): string {
    return `<main class="main-page__container">
                {{{ LeftPanel }}}
                {{{ Chat }}}
            </main>`;
  }
}

const mapStateToProps = (state: BlockProps): MainPageProps => {
  return {};
};

export default connect(MainPage, mapStateToProps);
