import Block, { BlockProps } from "../../framework/Block";

interface DropDownProps extends BlockProps {
  dialog: Block;
  className: string;
  onClick: (e: Event) => void;
}

export class DropDown extends Block {
  open: boolean;
  constructor(props: DropDownProps) {
    super({
      ...props,
      Dialog: props.dialog,
      className: props.className,
      events: {
        click: (e: Event) => {
          props.onClick(e);
          e.stopPropagation();

          const modal = e.target as HTMLDivElement;
          if (modal.classList.contains(props.className)) {
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

  override render(): string {
    return `<div class="{{className}}">{{{Dialog}}}</div>`;
  }
}
