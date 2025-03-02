import { ButtonIcon } from "../../components/button-icon/button-icon";
import { DateMessage } from "../../components/date-message/date-message";
import { HeaderLeftPanel } from "../../components/header-left-panel/header-left-panel";
import { Message } from "../../components/message/message";
import { SvgIcon } from "../../components/svg-icon/svg-icon";
import Block from "../../framework/Block";
import { HeaderChat } from "../../components/header-chat/header-chat";
import { Input } from "../../components/input/input";
import { ChatParticipant } from "../../components/chat-participant/chat-participant";
import { IInput } from "../../shared/input.interface";
import { connect } from "../../framework/HOC";

const chatParticipants = [...new Array(3).keys()].map(
  (item) =>
    new ChatParticipant({
      time: `23.5${item}`,
      name: "Kirill",
      count: item,
    })
);
const chatParticipants2 = [...new Array(4).keys()].map(
  (item) =>
    new ChatParticipant({
      time: `23.5${item}`,
      name: "Kirill",
      count: item,
    })
);
const dataInput: IInput = {
  label: "",
  placeholder: "Поиск",
  name: "Поиск",
  type: "text",
  value: "",
  errorText: "",
};

export class MainPage extends Block {
  constructor() {
    super({
      HeaderLeftPanel: new HeaderLeftPanel({
        InputSearch: new Input({
          class: "input-search",
          dataInput: dataInput,
          onKeyup: (e: KeyboardEvent) => {
            if (e.key === "Enter") {
              this.onSearch();
            }
          },
        }),
      }),
      InputMessage: new Input({
        class: "chat-form__input-message",
        dataInput: dataInput,
        onBlur: (e: Event) => this.onBlur(e),
        onKeyup: (e: KeyboardEvent) => {
          if (e.key === "Enter") {
            this.onMessage(e);
          }
        },
      }),
      ButtonIcon: new ButtonIcon({
        dataPage: "mainPaige",
        class: "button-icon-right",
      }),

      ChatParticipants: chatParticipants,
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
        alt: "скребка",
      }),
    });
  }

  onSearch() {
    this.setLists({
      ...this.props,
      ChatParticipants: chatParticipants2,
    });
  }

  onMessage(e: Event) {
    const input = e.target as HTMLInputElement;
    this.setLists({
      ...this.props,
      Messages: [
        new Message({
          time: Date.now().toString(),
          text: input.value,
          owner: "1",
        }),
      ],
    });
  }

  protected override render(): string {
    return `<main class="main-page__container">
            <section class="left-panel">
                 {{{ HeaderLeftPanel }}}
                 {{{ ChatParticipants }}}
            </section>
                <section class="chat">
                  {{{ HeaderChat }}}
                  <div class="workspace-chat">
                    {{{Messages}}}
                    <p>По ссылке содержатся сверстаные тултипы и модальные окна</p>
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

const mapStateToProps = (state: any) => {
  return {
    // Здесь вы можете маппить нужные части состояния в пропсы компонента
    // Например:
    email: state.user?.email ?? "",
    login: state.user?.login ?? "",
  };
};

export default connect(mapStateToProps)(MainPage);
