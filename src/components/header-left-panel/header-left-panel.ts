import { router } from "../../App";
import Block from "../../framework/Block";
import { DialogAvatar } from "../dialog-avatar/dialog-avatar";
import { DialogChat } from "../dialog-chat/dialog-chat";
import { Input } from "../input/input";
import { Link } from "../link/Link";
import { Modal } from "../modal/modal";
import { SvgIcon } from "../svg-icon/svg-icon";
interface HeaderLeftPanelProps {
  InputSearch?: Input;
}
export class HeaderLeftPanel extends Block {
  constructor(props: HeaderLeftPanelProps) {
    super({
      ...props,
      SvgIcon: new SvgIcon({
        path: "../../../public/images/add_user.png",
        height: "15px",
        width: "15px",
        alt: "управление профилем",
        Modal: new Modal({
          className: "modal",
          dialog: new DialogChat({
            heading: "Создание чата",
          }),
          onClick: (e) => {},
        }),
      }),
      LinkProfile: new Link({
        class: "profile-link",
        dataPage: "profile",
        dataAction: "default",
        text: "Профиль >",
        onClick: (e: Event) => {
          e.preventDefault();
          router.go("/profile");
        },
      }),
    });
  }

  override render(): string {
    return `<header class="header-left-panel">
                    {{{SvgIcon}}}
                    {{{ LinkProfile }}}
                    {{{ InputSearch }}}
            </header>`;
  }
}
