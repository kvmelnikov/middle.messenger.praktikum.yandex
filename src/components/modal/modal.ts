import Block from "../../framework/Block";

interface ModalProps {
  dialog: Block;
  onClick: (e: Event) => void;
}

export class Modal extends Block {
  constructor(props: ModalProps) {
    console.log("modal constructor");
    super({
      ...props,
      Dialog: props.dialog,
      events: {
        click: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          props.onClick(e);
          //      this.hide();
        },
      },
    });
  }

  override render(): string {
    return `<div class="modal">{{{Dialog}}}</div>`;
  }
}
