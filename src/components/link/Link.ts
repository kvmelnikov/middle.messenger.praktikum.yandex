import Block from "../../framework/Block";

interface LinkProps {
  class: string;
  dataAction?: string;
  dataPage: string;
  text: string;
  href?: string;
  onClick?: (e: Event) => void;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      class: props.class,
      dataAction: props.dataAction || "default",
      dataPage: props.dataPage,
      text: props.text,
      events: {
        click: (e: Event) => {
          e.preventDefault();
          if (props.onClick) {
            props.onClick(e);
          }
        },
      },
    });
  }

  override render(): string {
    return '<a href="{{href}}" class="link {{class}}" data-action={{dataAction}} data-page="{{dataPage}}">{{text}}</a>';
  }
}
