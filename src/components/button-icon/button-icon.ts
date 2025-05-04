import Block from "../../framework/Block";
interface ButtonIconProps {
  class: string;
  type?: string;
  onClick?: (e: Event) => void;
}
export class ButtonIcon extends Block {
  constructor(props: ButtonIconProps) {
    super({
      ...props,
      class: props.class,
      type: props.type || "button",
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
    return '<button type="{{type}}"  class="button {{class}}"></button>';
  }
}
