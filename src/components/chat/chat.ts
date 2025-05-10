import Block from "../../framework/Block";
import HeaderChat from "../../components/header-chat/header-chat";
import serviceChat, { ChatService } from "../../store/services/chat.service";
import FooterChat from "../footer-chat/footer-chat";
import ChatWorkspace from "../chat-workspace/chat-workspace";

export default class Chat extends Block {
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
