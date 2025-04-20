import Block from "../../framework/Block";
import { ChatService } from "../../store/services/chat.service";
import Avatar from "../avatar/avatar";
import { DropDown } from "../drop-down/drop-down";
import { Modal } from "../modal/modal";
import { SvgIcon } from "../svg-icon/svg-icon";
import { TooltipUser } from "../tooltip-user/tooltip-user";
interface HeaderChatProps {
  avatarClass: string;
  avatarSrc: string;
  name: string;
}
export class HeaderChat extends Block {
  isUserActions: false;
  service: ChatService;
  isOpenedDropDown: boolean;

  constructor(props: HeaderChatProps) {
    super({
      ...props,
      Avatar: new Avatar({
        className: props.avatarClass,
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
        dialog: new TooltipUser(),
        className: "modal-tooltip-user",
        onClick: (e) => {},
      }),
    });
    this.service = new ChatService();
  }

  toogleDropDown() {
    const dropDown = this.getChildren("DropDown");

    if (!dropDown) {
      return;
    }

    if (dropDown && this.isOpenedDropDown) {
      dropDown.hide();
      this.isOpenedDropDown = false;
    } else if (dropDown && !this.isOpenedDropDown) {
      dropDown.show();
      this.isOpenedDropDown = true;
    }
  }

  override render(): string {
    return `<header class="header-chat">
                {{{Avatar}}}
                <div class="header-chat__name-block">
                    <p class="header-chat__name">{{name}}</p>
                </div>
                    {{{ SvgIcon }}}
                    {{{DropDown}}}
            </header>`;
  }
}
