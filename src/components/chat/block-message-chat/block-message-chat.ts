import Block from '../../../framework/Block';


export class BlockMessageChat extends Block {
  constructor(props: any) {
    super({ ...props,
      DateMessage: props.DateMessage,
      Messages: props.Messages,
    });
  }

  render() {
    return `
        {{{DateMessage}}}
        `;
  }
}
