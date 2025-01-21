import Block from '../../../framework/Block';
import { DateMessage } from '../../date-message/date-message';
import { Message } from '../../message/message';

export class WorkspaceChat extends Block {
  constructor(props: any) {
    super({
      ...props,
      DateMessage: new DateMessage({}),
      Messages: [...new Array(3).keys()].map(item => new Message({ time: `23.5${item}`, text: `${item + 1}Имя` })), 
    });
  }

  override render(): string {
    return `<div class="workspace-chat">
                    {{{Messages}}}
                    <p>По ссылке содержатся сверстаные тултипы и модальные окна</p>
                    {{{ Link data-page="auxiliaryElements" data-action="default" text="Вспомогательные компоненты" class="link link-login" }}}
                </div>`;
  }
}
