import Block from '../../../framework/Block';
import { ButtonIcon } from '../../button-icon/button-icon';
import { SvgIcon } from '../../svg-icon/svg-icon';
import { InputMessage } from '../input-message/input-message';

export class FormChat extends Block {
  constructor(props: any) {
    super({
      ...props,
      SvgIcon: new SvgIcon({
        path: '../../../public/svg/clip.svg',
        height: '32px',
        alt: 'скребка',
      }),
      InputMessage: new InputMessage({
        class: 'chat-form__input-message',
        placeholder: 'Введите сообщение',
        type: 'text',

      }),
      ButtonIcon: new ButtonIcon({
        dataPage: 'mainPaige',
        class: 'button-icon-right',
      }),
    });
  }

  override render(): string {
    return `<form class="chat-form" >
                    {{{ SvgIcon  }}}
                    {{{InputMessage}}}
                    {{{ ButtonIcon }}} 
                </form>`;
  }
}
