import Block from "../../framework/Block";
import { ButtonIcon } from "../button-icon/button-icon";
interface LeftNavigateProps {
  ButtonIcon: ButtonIcon;
}
export class LeftNavigate extends Block {
  constructor(props: LeftNavigateProps) {
    super({
      ...props,
      ButtonIcon: new ButtonIcon({
        dataPage: "mainPage",
        class: "button button-icon-left",
      }),
    });
  }

  override render() {
    return `<div class="left-navigate">
                    {{{ ButtonIcon }}} 
                 </div>`;
  }
}
