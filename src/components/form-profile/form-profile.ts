import Block, { BlockProps } from "../../framework/Block";
import connect from "../../framework/HOC";
import { inputsPassword, inputsProfile } from "../../shared/data-types-form";
import { IUser } from "../../shared/user.interface";
import { UserService } from "../../store/services/user.service";
import Avatar from "../avatar/avatar";
import { Button } from "../button/button";
import { DialogAvatar } from "../dialog-avatar/dialog-avatar";
import { Fieldset } from "../input/fieldset";
import { Modal } from "../modal/modal";
import { prepareInputsToForm } from "./form-profile.utils";

interface FormProfileProps extends BlockProps {
  valueLogin?: string;
  inputs?: Fieldset[];
  currentUser?: IUser;
}

class FormProfile extends Block {
  changeForm: false;
  isEditableProfile: false;
  isEditablePassword: false;
  isChangeAvatar: false;
  service: UserService;

  constructor(props: FormProfileProps) {
    super({
      ...props,
      Avatar: new Avatar({
        className: "avatar avatar_big",
        onClick: () => {
          this.openModalAvatar();
        },
      }),
      Modal: new Modal({
        className: "modal",
        dialog: new DialogAvatar({
          heading: "Выберите аватар",
        }),
        onClick: () => {},
      }),
      ButtonSaveProfile: new Button({
        text: "Сохранить",
        class: "button__apperance",
        type: "submit",
        onClick: (e) => {
          this.service.updateUserProfile(this.onSubmit(e));
        },
      }),
      ButtonSavePass: new Button({
        text: "Сохранить",
        class: "button__apperance",
        type: "submit",
        onClick: (e) => {
          this.service.updateUserPassword(this.onSubmit(e));
        },
      }),
      ButtonChangeProfile: new Button({
        text: "Изменить данные",
        class: "button__apperance",
        onClick: () => {
          this.onChangeEditable();
        },
      }),
      ButtonChangePass: new Button({
        text: "Изменить пароль",
        class: "button__apperance",
        onClick: () => {
          this.onChangePassword();
        },
      }),
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
    });
    this.service = new UserService();
  }

  onChangeEditable() {
    this.setProps({
      changeForm: true,
      isEditableProfile: true,
    });

    this.setLists({
      fieldsets: prepareInputsToForm(
        this.props.currentUser,
        inputsProfile,
        false
      ),
    });
  }

  onChangePassword() {
    this.setProps({
      changeForm: true,
      isEditablePassword: true,
    });
    this.setLists({
      fieldsets: prepareInputsToForm(
        this.props.currentUser,
        inputsPassword,
        false
      ),
    });
  }

  openModalAvatar() {
    const modal = this.getChildren("Modal");

    modal && !this.isShow ? modal.show() : modal.hide();
  }

  protected render(): string {
    return `                <form class="profile__main">
                                {{{ Avatar }}}
                                <p class="profile__name">Иван</p>
                                {{{ fieldsets }}}
                                <div class="profile__actions">
                                    {{#if changeForm }}
                                        {{#if isEditableProfile}}      
                                            {{{ ButtonSaveProfile  }}}    
                                               {{{ ButtonExit }}}         
                                         {{ else }}
                                         {{{ ButtonSavePass }}}
                                           {{{ ButtonExit }}}
                                          {{/if}}
                                    {{else}}
                                        {{{ ButtonChangeProfile }}}
                                        {{{ ButtonChangePass }}}
                                        {{{ ButtonExit }}}
                                    {{/if}}  
                                </div>
                                {{{ Modal }}}
                            </form>`;
  }
}

const mapStateToProps = (state: BlockProps): FormProfileProps => {
  const avatar = state.profile_avatar as File;
  const currentUser = state.user as IUser;

  const fieldsets = prepareInputsToForm(currentUser, inputsProfile, true);

  return { avatar, fieldsets, currentUser };
};

export default connect(FormProfile, mapStateToProps);
