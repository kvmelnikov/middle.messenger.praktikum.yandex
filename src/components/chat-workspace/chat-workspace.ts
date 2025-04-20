import Block from "../../framework/Block";
import serviceChat, { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";

interface ChatWorkSpaceProps {}

class ChatWorkSpace extends Block {
  serviceChat: ChatService;

  constructor() {
    super({
      Messages: [],
    });

    this.serviceChat = serviceChat;
  }

  protected override render(): string {
    return ` 
            <div class="workspace-chat">
                {{{Messages}}}
                {{{ Link data-page="auxiliaryElements" data-action="default" text="Вспомогательные компоненты" class="link link-login" }}}
            </div>
            `;
  }
}

const mapStateToProps = (state: any): ChatWorkSpaceProps => {
  return {};
};

export default connect(ChatWorkSpace, mapStateToProps);
