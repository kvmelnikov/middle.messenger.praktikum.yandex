import Block from "../../framework/Block";
import { Input } from "../input/input";
import { Link } from "../link/Link";
interface HeaderLeftPanelProps {
  InputSearch: Input;
}
export class HeaderLeftPanel extends Block {
  constructor(props: HeaderLeftPanelProps) {
    super({
      ...props,
      LinkProfile: new Link({
        class: "profile-link",
        dataPage: "profile",
        dataAction: "default",
        text: "Профиль >",
        href: "/profile",
      }),
    });
  }

  override render(): string {
    return `<header class="header-left-panel">
                    {{{ LinkProfile }}}
                    {{{ InputSearch }}}
            </header>`;
  }
}
