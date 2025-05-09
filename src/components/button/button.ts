import Block from "../../framework/Block";
interface ButtonProps {
  text: string;
  class?: string;
  className?: string;
  type: string;
  onClick: (e: Event) => void;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
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

  protected render(): string {
    return `<button  type="{{type}}" class=" {{class}}">{{text}}</button>`;
  }
}
