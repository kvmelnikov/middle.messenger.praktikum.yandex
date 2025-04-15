import Block from "../../framework/Block";
import { ChatService } from "../../store/services/chat.service";
import Avatar from "../avatar/avatar";
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
  constructor(props: HeaderChatProps) {
    super({
      Avatar: new Avatar({
        className: props.avatarClass,
        src: props.avatarSrc,
      }),
      SvgIcon: new SvgIcon({
        path: "../../../public/svg/more-svg.svg",
        height: "15px",
        width: "15px",
        alt: "управление профилем",
        onClick: () => {
          this.openModal();
        },
      }),
      Modal: new Modal({
        dialog: new TooltipUser(),
        className: "modal-tooltip-user",
        onClick: (e) => {
          const modal = e.target as HTMLDivElement;
          if (modal.classList.contains("modal-tooltip-user")) {
            this.closeModal();
          }
        },
      }),
      name: props.name,
    });
    this.service = new ChatService();
  }

  closeModal() {
    this.setProps({
      isUserActions: false,
    });
  }

  openModal() {
    this.setProps({
      isUserActions: true,
    });
  }
  override render(): string {
    return `<header class="header-chat">
                {{{Avatar}}}
                <div class="header-chat__name-block">
                    <p class="header-chat__name">{{name}}</p>
                </div>
                {{{ SvgIcon }}}
                {{#if isUserActions}}
                      {{{Modal}}}
                {{/if}}
                </header>`;
  }
}
