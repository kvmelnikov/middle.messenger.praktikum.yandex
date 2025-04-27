import Block, { BlockProps } from "../../framework/Block";
import Input from "../input/input";
import chatService, { ChatService } from "../../store/services/chat.service";
import { Fieldset } from "../input/fieldset";
import connect from "../../framework/HOC";
import { IChatUser } from "../../shared/chat-user.interface";
import userService, { UserService } from "../../store/services/user.service";
import { IUser } from "../../shared/user.interface";
import User, { UserParticipant } from "../user/user";

interface DialogDeleteUserProps {
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
class DialogDeleteUser extends Block {
  chatService: ChatService;
  userService: UserService;
  constructor(props: DialogDeleteUserProps) {
    super({
      ...props,
      events: {
        onClick: () => {
          console.log("click");
        },
      },
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
       <div class="dialog-window">
            <ul>
                {{{ users }}}
            </ul>
        </div>    
            `;
  }
}

const mapStateToProps = (state: BlockProps): DialogDeleteUserProps => {
  const chatId = state.currentChatId as number;
  const usersData = state.users as IUser[];

  const users = usersData?.map(
    (user) =>
      new User({
        id: user.id,
        name: user.login,
        isAdd: false,
      })
  );

  return { chatId, users };
};

export default connect(DialogDeleteUser, mapStateToProps);
