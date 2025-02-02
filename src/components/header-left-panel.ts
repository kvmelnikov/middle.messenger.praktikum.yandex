import Block from '../framework/Block';
import { Link } from './link/Link';
import { InputSearch } from '../input-search/input-search';

export class HeaderLeftPanel extends Block {
  constructor(props: any) {
    super({ ...props,
      LinkProfile : new Link({
        href: '#',
        dataPage: 'profile',
        dataAction: 'default',
        text: 'Профиль >',
      }),
   
    });
  }



  override render(): string {
    return `<header class="header-left-panel">
                    {{{ LinkProfile }}}
                    {{{ InputSearch }}}
            </header>`;    
  }
}
