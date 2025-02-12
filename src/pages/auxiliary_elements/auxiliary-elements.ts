import { ToolTipAttach } from '../../components/tooltip-attach/tooltip-attach';
import { TooltipUser } from '../../components/tooltip-user/tooltip-user';
import Block from '../../framework/Block';

export class AuxiliaryElements extends Block {
  constructor() {
    super({
      TooltipAttach: new ToolTipAttach(),
      TooltipUser: new TooltipUser(),
    });
  }

  protected render(): string {
    return `<main>
                {{{ TooltipAttach }}}
                {{{ TooltipUser }}}
            </main>`;
  }
}

// <main>
//     {{> TooltipAttach}}
//     {{> TooltipUser}}
//     {{> DialogWindow heading="Удалить пользователя"}}
// </main>
