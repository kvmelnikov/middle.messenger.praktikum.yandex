import Block from '../../framework/Block';
import { FooterChat } from './footer-chat/footer-chat';
import { HeaderChat } from './header-chat/header-chat';
import { WorkspaceChat } from './workspace-chat/workspace-chat';

export class Chat extends Block {
  constructor() {
    super({
      HeaderChat: new HeaderChat({
        avatarSrc: '../../../public/images/avatar-example.png',
        avatarClass: 'avatar_small',
        name: 'Вадим',
      }),
      WorkspaceChat: new WorkspaceChat({
                
      }),
      FooterChat: new FooterChat({

      }),
    });
  }

  protected render(): string {
    return `<section class="chat">
                  {{{ HeaderChat }}}
                  {{{ WorkspaceChat }}}
                  {{{ FooterChat }}}
                </section>`;
  }   
}
