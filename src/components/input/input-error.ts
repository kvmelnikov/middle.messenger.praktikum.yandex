import Block from '../../framework/Block';

interface InputErrorProps {
  name: string;
  text: string;
}

export class InputError extends Block {
  constructor(props: InputErrorProps) {
    super({
      ...props,
    });
  }
  protected render(): string {
    return `<div class="">{{text}}</div>`;
  }
}
