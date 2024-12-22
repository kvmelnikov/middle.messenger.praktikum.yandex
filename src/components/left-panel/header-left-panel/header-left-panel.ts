import Block from "../../../framework/Block";
import { Link } from "../../link/Link";
import { InputSearch } from "../input-search/input-search";


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
                  }
              }),
            InputSearch: new InputSearch({
                addedClass: {
                    class: 'input-search'
                },
                ...props
                // events{
                //     keyDown: props.events.keyDown(e: Event)
                // } 

            })
            })
        }
              
    override render(): string {
        // {{{ Link data-page="profile" data-action="default" text="Профиль >" class="link link-profile" }}}
        //{{{ InputSearch }}}
        return `<header class="header-left-panel">
                    {{{ LinkProfile }}}
                    {{{ InputSearch }}}
                </header>`    
    }
}
