import { Chat } from '../../components/chat/chat';
import { LeftPanel } from '../../components/left-panel/left-panel';
import Block from '../../framework/Block';
const chatParticipants = [...new Array(3).keys()].map(item => new ChatParticipant({ time: `23.5${item}`, name: 'Kirill', text: `${item + 1}Имя`, count: item }));

export class MainPage extends Block {
  constructor() {
    super({
      LeftPanel: new LeftPanel({}),
      Chat: new Chat(),
       HeaderLeftPanel
    });
  }

  protected override render(): string {

    return `<main class="main-page__container">
            <section class="left-panel">
                 {{{ HeaderLeftPanel }}}

            </section>`
                 {{{ Chat}}}
                </main>`;
  }
}
