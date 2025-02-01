import Block from '../../framework/Block';
import { ChatParticipant } from './chat-participant/chat-participant';
import { HeaderLeftPanel } from './header-left-panel/header-left-panel';
import { InputSearch } from './input-search/input-search';

const chatParticipants = [...new Array(3).keys()].map(item => new ChatParticipant({ time: `23.5${item}`, name: 'Kirill', text: `${item + 1}Имя`, count: item }));
const chatParticipants2 = [...new Array(4).keys()].map(item => new ChatParticipant({ time: `23.5${item}`, name: 'Kirill', text: `${item + 1}Имя`, count: item }));

export class LeftPanel extends Block {
  constructor(props: any) {
    super({
      ...props,
      HeaderLeftPanel: new HeaderLeftPanel({    
        InputSearch: new InputSearch({
            onKyeup: (e: Event) => {
              this.onSeach(e)
            }
        }) 
      }),
      ChatParticipants: chatParticipants,
    });
  } 

  onSeach(e: Event) {
    this.setLists({
      ChatParticipant: chatParticipants2
    }
    )
    e.preventDefault()
    e.stopPropagation()
  }

  override render(): string {
    return `<section class="left-panel">
                  {{{ HeaderLeftPanel }}}
                  {{{ ChatParticipants }}}
                </section>`;
  }
}
