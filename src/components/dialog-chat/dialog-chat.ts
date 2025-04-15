import Block from "../../framework/Block";
import Input from "../input/input";
import { ChatService } from "../../store/services/chat.service";
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
        name: "login",
        label: "Логин",
        input: new Input({
          dataInput: {
            label: "Логин",
            placeholder: "",
            name: "title",
            type: "text",
            errorText: "введите текст",
            validators: {
              minlength: "2",
              maxlength: "40",
              pattern: "",
              required: "required",
            },
          },
          class: "profile__info-line",
        }),
      }),
    });

    this.service = new ChatService();
  }

  onSubmitChat(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formValues: { [key: string]: string } = {};
    for (const [key, value] of formData.entries()) {
      formValues[key] = value.toString();
    }
    this.service.createChat(formValues.title);
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
