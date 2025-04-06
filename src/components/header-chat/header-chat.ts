import Block from "../../framework/Block";
import Avatar from "../avatar/avatar";
import { SvgIcon } from "../svg-icon/svg-icon";
interface HeaderChatProps {
  avatarClass: string;
  avatarSrc: string;
  name: string;
}
export class HeaderChat extends Block {
  constructor(props: HeaderChatProps) {
    super({
      Avatar: new Avatar({
        className: props.avatarClass,
        src: props.avatarSrc,
      }),
      SvgIcon: new SvgIcon({
        path: "../../../public/svg/more-svg.svg",
        height: "15px",
        alt: "управление профилем",
      }),
      name: props.name,
    });
  }

  override render(): string {
    return `<header class="header-chat">
                {{{Avatar}}}
                <div class="header-chat__name-block">
                    <p class="header-chat__name">{{name}}</p>
                </div>
                {{{ SvgIcon }}}
                </header>`;
  }
}
