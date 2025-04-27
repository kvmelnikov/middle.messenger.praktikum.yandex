import Block from "../../framework/Block";
import { AuthService } from "../../store/services/auth.service";
import { ChatService } from "../../store/services/chat.service";
import Avatar from "../avatar/avatar";
import { DropDown } from "../drop-down/drop-down";
import { SvgIcon } from "../svg-icon/svg-icon";
import TooltipUser from "../tooltip-user/tooltip-user";
interface HeaderChatProps {
  avatarClass: string;
  avatarSrc: string;
  name: string;
}
export class HeaderChat extends Block {
  isUserActions: false;
  chatService: ChatService;
  authService: AuthService;

  constructor(props: HeaderChatProps) {
    super({
      ...props,
      Avatar: new Avatar({
        className: "avatar",
        src: props.avatarSrc,
      }),

      SvgIcon: new SvgIcon({
        path: "../../../public/svg/more-svg.svg",
        height: "15px",
        width: "15px",
        alt: "управление профилем",
        onClick: (e) => {
          this.toogleDropDown();
        },
      }),
      DropDown: new DropDown({
        dialog: new TooltipUser({}),
        className: "modal-tooltip-user",
      }),
    });

    this.chatService = new ChatService();
    this.authService = new AuthService();
    this.authService.getUser();
  }

  toogleDropDown() {
    const dropDown = this.getChildren("DropDown");

    if (dropDown.isShow) {
      dropDown.hide();
    } else {
      dropDown.show();
    }
  }

  override render(): string {
    return `<header class="header-chat">
              <section class="header-chat__user">
                {{{Avatar}}}
                <div class="header-chat__name-block">
                <p class="header-chat__name">{{name}}</p>
                </div>
              </section>
                {{{ SvgIcon }}}
                {{{ DropDown }}}
            </header>`;
  }
}
