import Block from '../../framework/Block';
import { ButtonIcon } from '../button-icon/button-icon';

export class LeftNavigate extends Block {
  constructor(props: any) {
    super({
      ...props,
      ButtonIcon: new ButtonIcon({
        attr: {
          dataPage: 'mainPaige',
          class: 'button button-icon-left',
        },
      }),
    });
  }

  override render() {
    return `<div class="left-navigate">
                    {{{ ButtonIcon }}} 
                 </div>`;
  }
}
