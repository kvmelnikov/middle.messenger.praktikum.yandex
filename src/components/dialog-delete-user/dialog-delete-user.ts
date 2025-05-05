import Block, { BlockProps } from "../../framework/Block";
import chatService, { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";
import userService, { UserService } from "../../store/services/user.service";
import { IUser } from "../../shared/user.interface";

interface DialogDeleteUserProps {
  chatId?: number;
  users?: Block[];
}
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
