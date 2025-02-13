import Block from "../../framework/Block";
interface ButtonIconProps {
  dataPage: string;
  class: string;
}
export class ButtonIcon extends Block {
  constructor(props: ButtonIconProps) {
    super({ ...props, dataPage: props.dataPage, class: props.class });
  }

  override render() {
    return '<button type="button" data-page="{{dataPage}}" class="button {{class}}"></button>';
  }
}
