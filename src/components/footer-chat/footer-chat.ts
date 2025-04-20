import { ButtonIcon } from "../../components/button-icon/button-icon";
import LeftPanel from "../../components/left-panel/left-panel";
import { SvgIcon } from "../../components/svg-icon/svg-icon";
import Block, { BlockProps } from "../../framework/Block";
import { IInput } from "../../shared/input.interface";
import serviceChat, { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";

const dataInput: IInput = {
  label: "",
  placeholder: "Поиск",
  name: "Поиск",
  type: "text",
  errorText: "",
};

interface FooterChatProps extends BlockProps {}

class FooterChat extends Block {
  serviceChat: ChatService;
  constructor() {
    super({
      LeftPanel: new LeftPanel({}),
      ButtonIcon: new ButtonIcon({
        class: "button-icon-right",
      }),
      SvgIcon: new SvgIcon({
        path: "../../../public/svg/clip.svg",
        height: "32px",
        width: "32px",
        alt: "скребка",
        onClick: (e) => {},
      }),
    });
    this.serviceChat = serviceChat;
    this.serviceChat.getChats();
  }

  protected override render(): string {
    return `
            <div class="footer-chat">
                <div class="chat-form">
                    {{{ SvgIcon  }}}
                    {{{InputMessage}}}
                    {{{ ButtonIcon }}} 
                </div>  
            </div>
                `;
  }
}

const mapStateToProps = (state: BlockProps): FooterChatProps => {
  return {};
};

export default connect(FooterChat, mapStateToProps);
