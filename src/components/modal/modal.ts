import Block from "../../framework/Block";

interface ModalProps {
  dialog: Block;
}

export class Modal extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
      Dialog: props.dialog,
    });
  }

  override render(): string {
    return `<div class="modal">{{{Dialog}}}</div>`;
  }
}
