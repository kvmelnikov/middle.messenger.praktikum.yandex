import { router } from "../../App";
import Block, { BlockProps } from "../../framework/Block";
import { ButtonIcon } from "../button-icon/button-icon";

interface LeftNavigateProps extends BlockProps {
  onClick: (e: Event) => void;
}
export class LeftNavigate extends Block {
  constructor(props: LeftNavigateProps) {
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
