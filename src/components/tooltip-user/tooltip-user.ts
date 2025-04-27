import Block, { BlockProps } from "../../framework/Block";
import DialogAddUser from "../dialog-add-user/dialog-add-user";
import { Modal } from "../modal/modal";
import { TooltipAttachElement } from "../tooltip-atach-element/tooltip-attach-element";
import DialogDeleteUser from "../dialog-delete-user/dialog-delete-user";
import chatService, { ChatService } from "../../store/services/chat.service";
import connect from "../../framework/HOC";
interface TooltipUserProps extends BlockProps {
  chatId?: number;
}

class TooltipUser extends Block {
  chatService: ChatService;
  constructor(props: TooltipUserProps) {
    super({
      ...props,
      TooltipAttachElementUser: new TooltipAttachElement({
        src: "../../../public/images/add_user.png",
        alt: "Добавить пользователя",
        text: "Добавить пользователя",
        onClick: (e: Event) => {
          this.openModalAddUser();
        },
      }),
      TooltipAttachElementFile: new TooltipAttachElement({
        src: "../../../public/images/delete-user.png",
        alt: "Удалить пользователя",
        text: "Удалить пользователя",
        onClick: (e: Event) => {
          this.openModalDeleteUser();
        },
      }),
      ModalAddUser: new Modal({
        dialog: new DialogAddUser({}),
        className: "modal",
        onClick: () => {},
      }),

      ModalDeleteUser: new Modal({
        dialog: new DialogDeleteUser({}),
        className: "modal",
        onClick: () => {},
      }),
    });

    this.chatService = chatService;
  }

  openModalAddUser() {
    const modal = this.getChildren("ModalAddUser");

    modal && !this.isShow ? modal.show() : modal.hide();
  }
  openModalDeleteUser() {
    const modal = this.getChildren("ModalDeleteUser");

    this.chatService.GetChatUsers(this.props.chatId);

    modal && !this.isShow ? modal.show() : modal.hide();
  }

  protected render(): string {
    return `<div class="tooltip-attach"> 
                {{{ TooltipAttachElementUser }}}
                {{{ TooltipAttachElementFile }}}
                {{{ModalAddUser}}}
                {{{ModalDeleteUser}}}
                </div>`;
  }
}

const mapStateToProps = (state: BlockProps): TooltipUserProps => {
  const chatId = state.currentChatId as number;

  return { chatId };
};

export default connect(TooltipUser, mapStateToProps);
