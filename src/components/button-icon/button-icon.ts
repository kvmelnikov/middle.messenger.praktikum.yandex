import Block from "../../framework/Block";

export class ButtonIcon extends Block {
  constructor(props: any) {
    super({ ...props, dataPage: props.dataPage, class: props.class });
  }

  override render() {
    return '<button type="button" data-page="{{dataPage}}" class="button {{class}}"></button>';
  }
}
