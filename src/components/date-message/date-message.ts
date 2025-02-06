import Block from '../../framework/Block';
import { Time } from '../time/time';

export class DateMessage extends Block {
  constructor(props: any) {
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
