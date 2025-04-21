import Block, { BlockProps } from "../../framework/Block";

interface DropDownProps extends BlockProps {
  dialog: Block;
  className: string;
}

export class DropDown extends Block {
  constructor(props: DropDownProps) {
    super({
      ...props,
      Dialog: props.dialog,
      className: props.className,
    });
    this.hide();
  }

  override render(): string {
    return `<div class="{{className}}">{{{Dialog}}}</div>`;
  }
}
