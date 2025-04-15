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
      className: props.className,
      events: {
        click: (e: Event) => {
          props.onClick(e);
          e.stopPropagation();
          const modal = e.target as HTMLDivElement;
          if (modal.classList.contains("modal")) {
            this.toogleModal();
          }
        },
      },
    });
    this.hide();
  }

  public toogleModal() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  public show(): void {
    const content = this.getContent();
    if (content) {
      content.style.display = "block";
    }
    this.open = true;
  }

  public hide(): void {
    const content = this.getContent();
    if (content) {
      content.style.display = "none";
    }
    this.open = false;
  }

  override render(): string {
    return `<div class="{{className}}">{{{Dialog}}}</div>`;
  }
}
