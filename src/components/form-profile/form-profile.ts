import Block, { BlockProps } from "../../framework/Block";
import connect from "../../framework/HOC";

import { IInput } from "../../shared/input.interface";
import { UserService } from "../../store/services/user.service";
import Avatar from "../avatar/avatar";
import { Button } from "../button/button";
import { DialogAvatar } from "../dialog-avatar/dialog-avatar";
import { Fieldset } from "../input/fieldset";
import Input from "../input/input";
import { Modal } from "../modal/modal";

const inputsData: IInput[] = [
  {
    label: "Почта",
    placeholder: "",
    name: "email",
    type: "email",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Логин",
    placeholder: "",
    name: "login",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Имя",
    placeholder: "",
    name: "first_name",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Фамилия",
    placeholder: "",
    name: "second_name",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Имя в чате",
    placeholder: "",
    name: "display_name",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Телефон",
    placeholder: "",
    name: "phone",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
];

const inputsPassword: IInput[] = [
  {
    label: "Старый пароль",
    placeholder: "",
    name: "oldPassword",
    type: "password",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Новый пароль",
    placeholder: "",
    name: "newPassword",
    type: "password",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Повторите новый пароль",
    placeholder: "",
    name: "newPassword",
    type: "password",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
];
interface FormProfileProps extends BlockProps {
  valueLogin?: string;
}

class FormProfile extends Block {
  changeForm: false;
  isEditableProfile: false;
  isEditablePassword: false;
  isChangeAvatar: false;
  service: UserService;

  constructor(props: FormProfileProps) {
    super({
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      Avatar: new Avatar({
        Modal: new Modal({
          className: "modal",
          dialog: new DialogAvatar({
            heading: "Выберите аватар",
          }),
          onClick: (e) => {},
        }),
        className: "avatar_big profile__avatar",
        onClick: () => {},
      }),
      InputLogin: new Fieldset({
        class: "profile__info-line",
        name: "login",
        label: "Логин",

        input: new Input({
          dataInput: {
            label: "Логин",
            placeholder: "",
            name: "login",
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
          onBlur: (e: Event) => this.onBlur(e),
        }),
      }),
      Inputs: inputsData.map(
        (dataForm) =>
          new Fieldset({
            class: "profile__info-line",
            name: dataForm.name,
            label: dataForm.label,
            input: new Input({
              disabled: true,
              class: "input-profile",
              dataInput: dataForm,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),

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
    });
    this.service = new UserService();
  }

  openModal() {
    this.setProps({
      isChangeAvatar: true,
    });
  }

  closeModal() {
    this.setProps({
      isChangeAvatar: false,
    });
  }

  onChangeEditable() {
    this.setProps({
      changeForm: true,
      isEditableProfile: true,
    });

    this.setLists({
      Inputs: inputsData.map(
        (dataForm) =>
          new Fieldset({
            class: "profile__info-line",
            name: dataForm.name,
            label: dataForm.label,
            input: new Input({
              disabled: false,
              class: "input-profile",
              dataInput: dataForm,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),
    });
  }

  onChangePassword() {
    this.setProps({
      changeForm: true,
      isEditablePassword: true,
    });

    this.setLists({
      Inputs: inputsPassword.map(
        (dataForm) =>
          new Fieldset({
            class: "profile__info-line",
            name: dataForm.name,
            label: dataForm.label,
            input: new Input({
              class: "input-profile",
              dataInput: dataForm,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),
    });
  }

  protected render(): string {
    return `                <form class="profile__main">
                                {{{ Avatar }}}
                                <p class="profile__name">Иван</p>
                                {{{ Inputs }}}
                                <div class="profile__actions">
                                    {{#if changeForm }}
                                        {{#if isEditableProfile}}      
                                            {{{ ButtonSaveProfile  }}}             
                                         {{ else }}
                                         {{{ ButtonSavePass }}}
                                    {{/if}}
                                    {{else}}
                                        {{{ ButtonChangeProfile }}}
                                        {{{ ButtonChangePass }}}
                                        {{{ ButtonExit }}}
                                    {{/if}}  
                                </div>
                            </form>`;
  }
}

// const mapStateToProps = (state: BlockProps): FormProfileProps => {
//   const file = state.profile_avatar as File;
//   const props = {
//     avatar: file,
//   } as FormProfileProps;

//   return props;
// };

// export default connect(mapStateToProps)(FormProfile);
export default FormProfile;
