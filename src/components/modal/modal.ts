import Block from "../../framework/Block";

interface ModalProps {
  dialog: Block;
  className: string;
  onClick: (e: Event) => void;
}

export class Modal extends Block {
  constructor(props: ModalProps) {
    console.log("modal constructor");
    super({
      ...props,
      Dialog: props.dialog,
      className: props.className,
      events: {
        click: (e: Event) => {
          props.onClick(e);
        },
      },
    });
  }

  override render(): string {
    return `<div class="{{className}}">{{{Dialog}}}</div>`;
  }
}
