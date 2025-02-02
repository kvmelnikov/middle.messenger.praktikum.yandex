import { ButtonIcon } from '../../components/button-icon/button-icon';
import { Chat } from '../../components/chat/chat';
import { HeaderChat } from '../../components/chat/header-chat/header-chat';
import { InputMessage } from '../../components/chat/input-message/input-message';
import { DateMessage } from '../../components/date-message/date-message';
import { ChatParticipant } from '../../components/left-panel/chat-participant/chat-participant';
import { HeaderLeftPanel } from '../../components/left-panel/header-left-panel/header-left-panel';
import { InputSearch } from '../../components/left-panel/input-search/input-search';
import { Message } from '../../components/message/message';
import { SvgIcon } from '../../components/svg-icon/svg-icon';
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
            if (e.key === 'Enter') {
              this.onSearch(e)
            }
          }
        })
      }),
      InputMessage: new InputMessage({
        class: 'chat-form__input-message',
        placeholder: 'Введите сообщение',
        type: 'text',
        onKyeup: (e: Event) => {
          if(e.key === 'Enter'){
            this.onMessage(e)
          }
        }
      }),
      ButtonIcon: new ButtonIcon({
        dataPage: 'mainPaige',
        class: 'button-icon-right',
      }),

      ChatParticipants: chatParticipants,
      HeaderChat: new HeaderChat({
        avatarSrc: '../../../public/images/avatar-example.png',
        avatarClass: 'avatar_small',
        name: 'Вадим',
      }),
      DateMessage: new DateMessage({}),
      Messages: [],
      SvgIcon: new SvgIcon({
        path: '../../../public/svg/clip.svg',
        height: '32px',
        alt: 'скребка',
      }),

    });
  }

  onSearch(e: Event) {
    this.setLists({
      ...this.props,
      ChatParticipants: chatParticipants2
    })
  }

  onMessage(e: Event) {
    const input = e.target as HTMLInputElement
    this.setLists({
      ...this.props,
      Messages: [new Message({time: Date.now().toString(), text: input.value })]
    })
  }

  protected override render(): string {

    return `<main class="main-page__container">
            <section class="left-panel">
                 {{{ HeaderLeftPanel }}}
                 {{{ ChatParticipants }}}
            </section>
                <section class="chat">
                  {{{ HeaderChat }}}
                  <div class="workspace-chat">
                    {{{Messages}}}
                    <p>По ссылке содержатся сверстаные тултипы и модальные окна</p>
                    {{{ Link data-page="auxiliaryElements" data-action="default" text="Вспомогательные компоненты" class="link link-login" }}}
                </div>
                   <div class="footer-chat">
                          {{{ SvgIcon  }}}
                          {{{InputMessage}}}
                          {{{ ButtonIcon }}} 
                   </div>
                </section>
                </main>`;
  }
}
