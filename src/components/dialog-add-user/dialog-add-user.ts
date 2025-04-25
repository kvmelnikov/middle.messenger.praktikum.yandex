import Block, { BlockProps } from "../../framework/Block";
import Input from "../input/input";
import chatService, { ChatService } from "../../store/services/chat.service";
import { Fieldset } from "../input/fieldset";
import connect from "../../framework/HOC";
import { IChatUser } from "../../shared/chat-user.interface";
import userService, { UserService } from "../../store/services/user.service";

interface DialogAddUserProps {
  heading: string;
  chatId?: number;
}

const dataInput = {
  label: "Новый чат",
  placeholder: "",
  name: "chat-title",
  type: "text",
  errorText: "введите текст",
  validators: {
    minlength: "2",
    maxlength: "40",
    pattern: "",
    required: "required",
  },
};

export class DialogAddUser extends Block {
  chatService: ChatService;
  userService: UserService;
  constructor(props: DialogAddUserProps) {
    super({
      ...props,
      events: {
        onClick: () => {
          console.log("click");
        },
        submit: (e: Event) => {
          e.preventDefault();
          this.onSubmitUser(e);
        },
      },
      Fieldset: new Fieldset({
        class: "profile__info-line",
        name: "login",
        label: "Логин",
        input: new Input({
          dataInput: dataInput,
          class: "profile__info-line",
        }),
      }),
    });

    this.userService = userService;
    this.chatService = chatService;
  }

  onSubmitUser(e: Event) {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const chatTitle = formData.get("chat-title") as string;

    const data: IChatUser = {
      users: [],
      chatId: this.props.chatId,
    };

    this.userService.searchUser(chatTitle);
  }

  protected render(): string {
    return `
            <div>
            <form class="dialog-window">
                <h5 class="dialog-window__heading">{{heading}}</h5>
                {{{Fieldset}}}
                <button type="submit">Создать чат</button>
            </form>
            

            </div>

            
     `;
  }
}

const mapStateToProps = (state: BlockProps) => {
  const chatId = state.currentChatId as number;

  return { chatId: chatId };
};

export default connect(DialogAddUser, mapStateToProps);
