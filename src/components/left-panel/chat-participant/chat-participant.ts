import Block from '../../../framework/Block';
import { Avatar } from '../../avatar/avatar';
import { Time } from '../../time/time';

export class ChatParticipant extends Block {
  constructor(props: any) {
    super({ ...props,
      Time: new Time({ time: props.time }),
      Avatar: new Avatar({
        src: '../../../public/images/avatar-example.png',
        className: 'avatar_medium',
      }),
      name: props.name,  
    });
  }

  override render(): string {
    return `<article class="chat-participant">
                {{{ Avatar }}}
                    <div class="chat-participant__message">
                        <p class="chat-participant__name">{{name}}</p>
                        <p class="chat-participant__text-message">Друзья, у меня для вас особенный выпуск новостей!</p>
                    </div> 
                <div class="chat-participant__time">
                {{{ Time }}}
                {{{ CounterMessage }}}
                </div>  
                </article>`;
  }
}
