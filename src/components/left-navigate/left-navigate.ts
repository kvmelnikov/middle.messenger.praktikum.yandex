import Block from '../../framework/Block';
import { ButtonIcon } from '../button-icon/button-icon';

export class LeftNavigate extends Block {
  constructor(props: any) {
    super({
      ...props,
      ButtonIcon: new ButtonIcon({
        addedClass: {
          class: 'button-icon-left',
        },
        attr: {
          dataPage: 'mainPaige',
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
