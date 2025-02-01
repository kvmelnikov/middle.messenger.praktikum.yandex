import { Chat } from '../../components/chat/chat';
import { ChatParticipant } from '../../components/left-panel/chat-participant/chat-participant';
import { HeaderLeftPanel } from '../../components/left-panel/header-left-panel/header-left-panel';
import { InputSearch } from '../../components/left-panel/input-search/input-search';
import Block from '../../framework/Block';

const chatParticipants = [...new Array(3).keys()].map(item => new ChatParticipant({ time: `23.5${item}`, name: 'Kirill', text: `${item + 1}Имя`, count: item }));
const chatParticipants2 = [...new Array(4).keys()].map(item => new ChatParticipant({ time: `23.5${item}`, name: 'Kirill', text: `${item + 1}Имя`, count: item }));

export class MainPage extends Block {
  constructor() {
    super({
      Chat: new Chat(),
      HeaderLeftPanel: new HeaderLeftPanel({
            InputSearch: new InputSearch({
                    onKyeup: (e: Event) => {
                      if(e.key === 'Enter') {
                        this.onSearch(e)
                      }
                    }
                }) 
      }),
      ChatParticipants: chatParticipants
    });
  }

  onSearch(e: Event) {
    this.setLists({
      ChatParticipants: chatParticipants2
    })
  }

  protected override render(): string {

    return `<main class="main-page__container">
            <section class="left-panel">
                 {{{ HeaderLeftPanel }}}
                 {{{ ChatParticipants }}}
            </section>
                 {{{ Chat}}}
                </main>`;
  }
}
