import { Chat } from '../../components/chat/chat';
import { LeftPanel } from '../../components/left-panel/left-panel';
import Block from '../../framework/Block';

export class MainPage extends Block {
  constructor() {
    super({
      LeftPanel: new LeftPanel({}),
      Chat: new Chat(),
    });
  }

  protected override render(): string {

    return `<main class="main-page__container">
                 {{{ LeftPanel}}}
                 {{{ Chat}}}
                </main>`;
  }
}
