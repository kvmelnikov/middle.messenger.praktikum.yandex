import { router } from "../../App";
import Block, { BlockProps } from "../../framework/Block";
import { ButtonIcon } from "../button-icon/button-icon";

export class LeftNavigate extends Block {
  constructor() {
    super({
      ButtonIcon: new ButtonIcon({
        class: "button button-icon-left",
        onClick: () => {
          this.route();
        },
      }),
    });
  }

  route() {
    router.go("/chat");
  }

  override render() {
    return `<div class="left-navigate">
                    {{{ ButtonIcon }}} 
                 </div>`;
  }
}
