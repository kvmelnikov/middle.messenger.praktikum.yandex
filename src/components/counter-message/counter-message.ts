import Block from "../../framework/Block";
interface CounterMessageProps {
  counter: number;
}
export class CounterMessage extends Block {
  constructor(props: CounterMessageProps) {
    super({ ...props });
  }

  override render(): string {
    return '<div class="counter-messsage">{{counter}}</div>';
  }
}
