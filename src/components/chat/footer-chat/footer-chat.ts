import Block from '../../../framework/Block';
import { FormChat } from '../form-chat/form-chat';

export class FooterChat extends Block {
  constructor(props: any) {
    super({ ...props,
      FormChat: new FormChat({}),
    });
  }

  override render(): string {
    return '<div class="footer-chat">{{{ FormChat }}}</div>';
  }
}
