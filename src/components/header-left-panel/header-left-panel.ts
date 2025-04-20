import { router } from "../../App";
import Block from "../../framework/Block";
import { DialogChat } from "../dialog-chat/dialog-chat";
import { Link } from "../link/Link";
import { Modal } from "../modal/modal";
import { SvgIcon } from "../svg-icon/svg-icon";
import FormSearch from "../form-search/form-search";
interface HeaderLeftPanelProps {}

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
          onClick: (e) => {
            e;
          },
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
      FormSearch: new FormSearch(),
    });
  }

  override render(): string {
    return `<header class="header-left-panel">
                    {{{SvgIcon}}}
                    {{{ LinkProfile }}}
                    {{{ FormSearch }}}
            </header>`;
  }
}
