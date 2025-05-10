import LeftPanel from "../../components/left-panel/left-panel";
import Block, { BlockProps } from "../../framework/Block";
import serviceChat, { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";
import Chat from "../../components/chat/chat";
import { AuthService } from "../../store/services/auth.service";

interface MainPageProps {
  currentChatId: number;
}

class MainPage extends Block {
  serviceChat: ChatService;

  authService: AuthService;

  constructor() {
    super({
      LeftPanel: new LeftPanel({}),
      Chat: new Chat(),
    });

    this.serviceChat = serviceChat;

    this.serviceChat.getChats();
    this.authService = new AuthService();
    this.authService.getUser();
  }

  protected override render(): string {
    return `<main class="main-page__container">
                {{{ LeftPanel }}}
                {{#if currentChatId}}
                  {{{ Chat }}}
                {{else}}
                  <section class="chat_empty">
                Выберите чат чтобы отправить сообщение
                </section>
                {{/if}}
            </main>`;
  }
}

const mapStateToProps = (state: BlockProps): MainPageProps => {
  const currentChatId = state.currentChatId as number;
  return { currentChatId };
};

export default connect(MainPage, mapStateToProps);
