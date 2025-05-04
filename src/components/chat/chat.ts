import Block from "../../framework/Block";
import HeaderChat from "../../components/header-chat/header-chat";
import serviceChat, { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";
import FooterChat from "../footer-chat/footer-chat";
import ChatWorkspace from "../chat-workspace/chat-workspace";

interface ChatProps {}

class Chat extends Block {
  serviceChat: ChatService;
  constructor() {
    super({
      HeaderChat: new HeaderChat({}),
      FooterChat: new FooterChat({}),
      ChatWorkspace: new ChatWorkspace({}),
    });

    this.serviceChat = serviceChat;
  }

  protected override render(): string {
    return `
            <section class="chat">
                {{{ HeaderChat }}}
                {{{ ChatWorkspace }}} 
                {{{ FooterChat }}}
            </section>`;
  }
}

const mapStateToProps = (state: any): ChatProps => {
  return {};
};

export default connect(Chat, mapStateToProps);
