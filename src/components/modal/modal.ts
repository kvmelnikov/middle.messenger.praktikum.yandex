import Block from "../../framework/Block";

interface ModalProps {
  dialog: Block;
  className: string;
  onClick: (e: Event) => void;
}

export class Modal extends Block {
  open: boolean;

  constructor(props: ModalProps) {
    super({
      ...props,
      Dialog: props.dialog,
      events: {
        click: (e: Event) => {
          e.stopPropagation();

          const modal = e.target as HTMLDivElement;
          if (modal.classList.contains(props.className)) {
            this.hide();
          }
        },
      },
    });
    this.hide();
  }

  public closeModal() {
    if (this.isShow) {
    }
  }

  override render(): string {
    return `<div class="{{className}}">{{{Dialog}}}</div>`;
  }
}
