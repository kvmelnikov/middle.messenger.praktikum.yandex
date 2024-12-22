import Block from "../../../framework/Block";
import { Link } from "../../link/Link";


export class HeaderLeftPanel extends Block {
    constructor() {
        super({
            LinkProfile : new Link({
                href: '#',
                datapage: 'createQuestionnaire',
                text: 'Create Questionnaire',
                addedClass: {
                    class: 'link-profile',
                  },  
           
                onClick: (event: Event) => {
                  console.log('CLICK');
                  event.preventDefault();
                  event.stopPropagation();
                },
              })
            })
        }
              
            
    

    override render(): string {
        // {{{ Link data-page="profile" data-action="default" text="Профиль >" class="link link-profile" }}}
        //{{{ InputSearch }}}
        return `<header class="header-left-panel">
                    {{{ LinkProfile  }}}
                  
                </header>`    
    }
}
