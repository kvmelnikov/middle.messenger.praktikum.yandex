import Block from '../../framework/Block';

export class Time extends Block {
  constructor(props: any) {
    super({ ...props });
  }

  override render(): string {
    return '<p class="time">{{time}}</p>';
  }
}
