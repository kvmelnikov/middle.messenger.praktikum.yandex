import Block from "../../framework/Block";
import Input from "../input/input";
import service, { ChatService } from "../../store/services/chat.service";
import { Fieldset } from "../input/fieldset";

interface DialogChatProps {
  heading: string;
}
export class DialogChat extends Block {
  service: ChatService;

  constructor(props: DialogChatProps) {
    super({
      ...props,
      events: {
        onClick: () => {
          console.log("click");
        },
        submit: (e: Event) => {
          e.preventDefault();
          this.onSubmitChat(e);
        },
      },
      Fieldset: new Fieldset({
        class: "profile__info-line",
        name: "chat-title",
        label: "Новый чат",
        input: new Input({
          name: "chat-title",
          type: "text",
        }),
      }),
    });

    this.service = service;
  }

  onSubmitChat(e: Event) {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const chatTitle = formData.get("chat-title") as string;

    this.service.createChat(chatTitle);
  }

  protected render(): string {
    return `
            <form class="dialog-window">
                <h5 class="dialog-window__heading">{{heading}}</h5>
                {{{Fieldset}}}
                <button type="submit">Создать чат</button>
            </form>
            </div>
     `;
  }
}
