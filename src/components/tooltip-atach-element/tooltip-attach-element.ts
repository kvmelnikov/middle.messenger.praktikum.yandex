import Block from "../../framework/Block";

interface TooltipAttachElementProps {
  src: string;
  alt: string;
  text: string;
  onClick: (e: Event) => void;
}

export class TooltipAttachElement extends Block {
  constructor(props: TooltipAttachElementProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          props.onClick(e);
        },
      },
    });
  }

  protected render(): string {
    return `<a class="tooltip-attach-element">
                    <img class="tooltip-attach-element__image" src="{{src}}" alt="{{alt}}">
                     <p class="tooltip-attach-element__text">{{text}}</p>
                 </a>`;
  }
}
