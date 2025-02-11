import Block from "../../framework/Block";
import { ButtonIcon } from "../button-icon/button-icon";

export class LeftNavigate extends Block {
  constructor() {
    super({
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
