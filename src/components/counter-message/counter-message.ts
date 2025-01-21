import Block from '../../framework/Block';

export class CounterMessage extends Block {
  constructor(props: any) {
    super({ ...props });
  }

  override render(): string {
    return '<div class="counter-messsage">{{counter}}</div>';
  }
}
