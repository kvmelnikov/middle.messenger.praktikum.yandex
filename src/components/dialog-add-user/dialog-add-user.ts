import Block, { BlockProps } from "../../framework/Block";
import Input from "../input/input";
import chatService, { ChatService } from "../../store/services/chat.service";
import { Fieldset } from "../input/fieldset";
import connect from "../../framework/HOC";
import { IChatUser } from "../../shared/chat-user.interface";
import userService, { UserService } from "../../store/services/user.service";
import { IUser } from "../../shared/user.interface";
import User, { UserParticipant } from "../user/user";

interface DialogAddUserProps {
  chatId?: number;
  users?: Block[];
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
class DialogAddUser extends Block {
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
          this.onSearchUser(e);
        },
      },
      Fieldset: new Fieldset({
        class: "profile__info-line",
        name: "Поиск пользователя",
        label: "Поиск пользователя",
        input: new Input({
          placeholder: "Логин",
          name: "login",
          type: "text",
          class: "profile__info-line",
        }),
      }),
    });

    this.userService = userService;
    this.chatService = chatService;
  }

  onSearchUser(e: Event) {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const login = formData.get("login") as string;

    this.userService.searchUser(login);
  }

  protected render(): string {
    return `
            <form class="dialog-window">
           
                  <h5 class="dialog-window__heading">{{heading}}</h5>
                  {{{Fieldset}}}
                  <button type="submit">Поиск пользователя</button>
                    <ul>
                      {{{ users }}}
                    </ul>
           
            </form>       
     `;
  }
}

const mapStateToProps = (state: BlockProps): DialogAddUserProps => {
  const chatId = state.currentChatId as number;
  const usersData = state.users as IUser[];

  const users = usersData?.map(
    (user) =>
      new User({
        id: user.id,
        name: user.login,
        isAdd: true,
      })
  );

  return { chatId, users };
};

export default connect(DialogAddUser, mapStateToProps);
