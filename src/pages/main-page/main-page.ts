import { ButtonIcon } from "../../components/button-icon/button-icon";
import { DateMessage } from "../../components/date-message/date-message";
import LeftPanel from "../../components/left-panel/left-panel";
import { SvgIcon } from "../../components/svg-icon/svg-icon";
import Block from "../../framework/Block";
import { HeaderChat } from "../../components/header-chat/header-chat";
import { IInput } from "../../shared/input.interface";
import { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";

const dataInput: IInput = {
  label: "",
  placeholder: "Поиск",
  name: "Поиск",
  type: "text",
  errorText: "",
};

interface ChatProps {}

class Chat extends Block {
  service: ChatService;
  constructor() {
    super({
      LeftPanel: new LeftPanel({}),
      ButtonIcon: new ButtonIcon({
        class: "button-icon-right",
      }),
      // ChatParticipants: chatParticipants,
      HeaderChat: new HeaderChat({
        avatarSrc: "../../../public/images/avatar-example.png",
        avatarClass: "avatar_small",
        name: "Вадим",
      }),

      DateMessage: new DateMessage({ time: "12.21" }),
      Messages: [],
      SvgIcon: new SvgIcon({
        path: "../../../public/svg/clip.svg",
        height: "32px",
        width: "32px",
        alt: "скребка",
      }),
    });
    this.service = new ChatService();
    this.service.getChats();
  }

  protected override render(): string {
    return `<main class="main-page__container">
                {{{ LeftPanel }}}
                <section class="chat">
                  {{{ HeaderChat }}}
                  <div class="workspace-chat">
                    {{{Messages}}}
                    {{{ Link data-page="auxiliaryElements" data-action="default" text="Вспомогательные компоненты" class="link link-login" }}}
                </div>
                   <div class="footer-chat">
                           <div class="chat-form">
                                 {{{ SvgIcon  }}}
                          {{{InputMessage}}}
                              {{{ ButtonIcon }}} 
                           </div>  
                   </div>
                </section>
                </main>`;
  }
}

// const mapStateToProps = (state: any, ownProps: any) => {
//   return {};
// };

// export default connect(mapStateToProps)(Chat);
export default Chat;
