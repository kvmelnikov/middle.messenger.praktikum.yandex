import Block from '../../framework/Block';
import { TooltipAttachElement } from '../tooltip-atach-element/tooltip-attach-element';

export class TooltipUser extends Block {
  constructor() {
    super({
      TooltipAttachElementUser: new TooltipAttachElement({
        src: '../../../public/images/add_user.png',
        alt: 'Добавить пользователя',
        text: 'Добавить пользователя',
      }),
      TooltipAttachElementFile: new TooltipAttachElement({
        src: '../../../public/images/delete-user.png',
        alt: 'Удалить пользователя',
        text: 'Удалить пользователя',
      }),
    });
  }

  protected render(): string {
    return `<div class="tooltip-attach"> 
                {{{ TooltipAttachElementUser }}}
                {{{ TooltipAttachElementFile }}}
            </div>`;
  }
}

// <div class="tooltip-attach">
//     {{> TooltipAttachElement src="../../../public/images/add_user.png" alt="Добавить пользователя" text="Добавить пользователя" }}
//     {{> TooltipAttachElement src="../../../public/images/delete-user.png" alt="Удалить пользователя" text="Удалить пользователя" }}
// </div>
