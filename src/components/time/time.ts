import Block from "../../framework/Block";
interface TimeProps {
  time: string;
}
export class Time extends Block {
  constructor(props: TimeProps) {
    super({ ...props });
  }

  override render(): string {
    return '<p class="time">{{time}}</p>';
  }
}
