import Block from "../../framework/Block";
interface MessageProps {
  time: string;
  text: string;
  owner: number;
  currentUserId: number;
}
export class Message extends Block {
  constructor(props: MessageProps) {
    super({
      ...props,
      time: props.time,
      text: props.text,
      classMessage:
        props.owner !== props.currentUserId
          ? "message__text_no-owner"
          : "message__text",
    });
  }

  render() {
    return `<div class="message">
                  <p class="{{classMessage}}">
                    {{text}}
                  </p>
                <div class="message__time">{{{Time}}}</div>
              </div>`;
  }
}
