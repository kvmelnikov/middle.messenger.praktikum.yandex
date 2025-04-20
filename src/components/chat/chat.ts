import { DateMessage } from "../../components/date-message/date-message";
import { SvgIcon } from "../../components/svg-icon/svg-icon";
import Block from "../../framework/Block";
import { HeaderChat } from "../../components/header-chat/header-chat";
import serviceChat, { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";
import FooterChat from "../footer-chat/footer-chat";
import ChatWorkspace from "../chat-workspace/chat-workspace";

interface ChatProps {}

class Chat extends Block {
  serviceChat: ChatService;
  constructor() {
    super({
      HeaderChat: new HeaderChat({
        avatarSrc: "../../../public/images/avatar-example.png",
        avatarClass: "avatar_small",
        name: "Вадим",
      }),
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
            </section>    `;
  }
}

const mapStateToProps = (state: any): ChatProps => {
  return {};
};

export default connect(Chat, mapStateToProps);
