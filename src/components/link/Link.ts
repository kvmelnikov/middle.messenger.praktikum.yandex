import Block from '../../framework/Block';

interface LinkProps {
  class: string;
  dataAction: string;
  dataPage: string;
  text: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      class: props.class,
      dataAction: props.dataAction,
      dataPage: props.dataPage,
      text: props.text,
    });
  }

  override render(): string {
    return '<a href="{{href}}" class="link {{class}}" data-action={{dataAction}} data-page="{{dataPage}}">{{text}}</a>';
  }
}
