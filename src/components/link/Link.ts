import Block from "../../framework/Block";

interface LinkProps {
  class: string;
  dataAction?: string;
  dataPage?: string;
  text: string;
  href?: string;
  onClick?: (e: Event) => void;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      class: props.class,
      text: props.text,
      events: {
        click: (e: Event) => {},
      },
    });
  }

  override render(): string {
    return '<a href="{{href}}" class="link {{class}}" data-action={{dataAction}} data-page="{{dataPage}}">{{text}}</a>';
  }
}
