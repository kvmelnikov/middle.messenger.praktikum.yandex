import Block from '../../../framework/Block';
import { Link } from '../../link/Link';

export class HeaderLeftPanel extends Block {
  constructor(props: any) {
    super({ ...props,
      LinkProfile : new Link({
        href: '#',
        dataPage: 'profile',
        dataAction: 'default',
        text: 'Профиль >',
        addedClass: {
          class: 'link-profile',
        },
      }),
    });
  }

  override render(): string {
    // {{{ Link data-page="profile" data-action="default" text="Профиль >" class="link link-profile" }}}
    //{{{ InputSearch }}}
    return `<header class="header-left-panel">
                    {{{ LinkProfile }}}
                    {{{ InputSearch }}}
                </header>`;    
  }
}
