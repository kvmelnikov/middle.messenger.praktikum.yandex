import Block from "../../framework/Block";
import { Time } from "../time/time";
interface DateMessageProps {
  time: string;
}
export class DateMessage extends Block {
  constructor(props: DateMessageProps) {
    super({
      ...props,
      Time: new Time({
        time: props.time,
      }),
    });
  }

  render() {
    return `<div class="date-message">
                {{{Time}}}
                </div>`;
  }
}
