import { ButtonIcon } from "../../components/button-icon/button-icon";
import Block, { BlockProps } from "../../framework/Block";
import { IInput } from "../../shared/input.interface";
import connect from "../../framework/HOC";
import { Fieldset } from "../input/fieldset";
import Input from "../input/input";
import messagesController from "../../store/controllers/message.controller";

const dataInput: IInput = {
  label: "",
  placeholder: "Поиск",
  name: "Поиск",
  type: "text",
  errorText: "",
};

interface FooterChatProps extends BlockProps {
  chatId: number;
}

class FooterChat extends Block {
  constructor(props: FooterChatProps) {
    super({
      ...props,
      Input: new Fieldset({
        class: "profile__info-line",
        name: "",
        label: "",
        input: new Input({
          class: "chat-form__input-message",
          placeholder: "Сообщение",
          name: "message",
          type: "text",
        }),
      }),
      ButtonIcon: new ButtonIcon({
        class: "button-icon-right",
        type: "submit",
      }),

      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const data = e.target as HTMLFormElement;
          const dataForm = new FormData(data);
          const message = dataForm.get("message");
          this.onMessageSend(message as string);
        },
      },
    });
  }

  onMessageSend(message: string) {
    messagesController.postMessage(this.props.chatId, message);
  }

  protected override render(): string {
    return `
            <form class="footer-chat">
                <div class="chat-form">
                    {{{ Input }}}
                    {{{ ButtonIcon }}} 
                </div>  
            </form>
                `;
  }
}

const mapStateToProps = (state: BlockProps): FooterChatProps => {
  const chatId = state.currentChatId as number;

  return { chatId };
};

export default connect(FooterChat, mapStateToProps);
