import Block from '../../framework/Block';
interface ButtonProps {
  text?: string;
  dataAction?: string;
  dataPage?: string;
  class?: string;
  className?: string;
  onClick: (e: Event) => void;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          props.onClick(e);
          this.onClickButton(e);
        },
      },
    });
  }

  onClickButton(e: any) {
    console.log(e, 'button click');
  }

  protected render(): string {
    return `<button data-action="{{dataAction}}" data-page="{{dataPage}}" type="button" class="button {{class}}">{{text}}</button>`;
  }
}
