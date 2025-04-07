import Block from "../../framework/Block";
interface ButtonIconProps {
  class: string;
  onClick?: (e: Event) => void;
}
export class ButtonIcon extends Block {
  constructor(props: ButtonIconProps) {
    super({
      ...props,
      class: props.class,
      events: {
        click: (e: Event) => {
          if (props.onClick) {
            props.onClick(e);
          }
        },
      },
    });
  }

  override render() {
    return '<button type="button"  class="button {{class}}"></button>';
  }
}
