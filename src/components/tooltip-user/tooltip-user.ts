import Block, { BlockProps } from "../../framework/Block";
import { DialogAddUser } from "../dialog-add-user/dialog-add-user";
import { Modal } from "../modal/modal";
import { TooltipAttachElement } from "../tooltip-atach-element/tooltip-attach-element";

interface TooltipUserProps extends BlockProps {}
export class TooltipUser extends Block {
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
        dialog: new DialogAddUser({
          heading: "Добавить пользователя в чат",
        }),
        className: "modal",
        onClick: () => {},
      }),
      ModalDeleteUser: new Modal({
        dialog: new DialogAddUser({
          heading: "Удалить пользователя из чата",
        }),
        className: "modal",
        onClick: () => {},
      }),
    });
  }

  openModalAddUser() {
    const modal = this.getChildren("ModalAddUser");

    if (modal && !this.isShow) {
      modal.show();
    } else {
      modal.hide();
    }
  }
  openModalDeleteUser() {
    const modal = this.getChildren("ModalDeleteUser");

    if (modal && !this.isShow) {
      modal.show();
    } else {
      modal.hide();
    }
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
