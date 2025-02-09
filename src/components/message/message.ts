import Block from "../../framework/Block";
interface MessageProps {
  time: string;
  text: string;
  owner: string;
}
export class Message extends Block {
  constructor(props: MessageProps) {
    super({ ...props, time: props.time, text: props.text, owner: props.owner });
  }

  render() {
    return `<div class="message">
                  <p class="message__text">
                    {{text}}
                  </p>
                <div class="message__time">{{{Time}}}</div>
              </div>`;
  }
}
