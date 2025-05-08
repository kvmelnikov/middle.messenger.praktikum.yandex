import { ButtonIcon } from "../../components/button-icon/button-icon";
import Block, { BlockProps } from "../../framework/Block";
import connect from "../../framework/HOC";
import { Fieldset } from "../input/fieldset";
import Input from "../input/input";
import messagesController from "../../store/controllers/message.controller";

interface FooterChatProps extends BlockProps {
  chatId?: number;
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
          required: "required",
          maxlength: "100",
          minlength: "1",
        }),
      }),
      ButtonIcon: new ButtonIcon({
        class: "button-icon-right",
        type: "submit",
      }),

      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const dataForm = this.onSubmit(e);
          this.onMessageSend(dataForm.message);
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
