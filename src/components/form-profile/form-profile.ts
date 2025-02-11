import Block from "../../framework/Block";
import { IInput } from "../../shared/input.interface";
import { Avatar } from "../avatar/avatar";
import { Button } from "../button/button";
import { Fieldset } from "../input/fieldset";
import { Input } from "../input/input";

const inputsData: IInput[] = [
  {
    label: "Почта",
    placeholder: "",
    name: "email",
    type: "email",
    value: "pochta@yandex.ru",
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
    value: "ivanivanov",
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
    value: "Иван",
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
    value: "Иванов",
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
    value: "Иван",
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
    value: "+7 (909) 967 30 30",
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
    value: "pochta2@yandex.ru",
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
    value: "pochta2@yandex.ru",
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
    value: "pochta2@yandex.ru",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
];
export class FormProfile extends Block {
  isEditableProfile: false;

  isEditablePassword: false;

  constructor() {
    super({
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      Avatar: new Avatar({
        src: "../../../public/images/avatar-example.png",
        className: "avatar_big profile__avatar",
      }),
      Inputs: inputsData.map(
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
      ButtonSave: new Button({
        text: "Сохранить",
        class: "button__apperance",
        type: "submit",
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
  }

  onsubmit(e: Event) {
    e.preventDefault();
    super.onSubmit(e);
  }

  onChangeEditable() {
    this.setProps({
      isEditableProfile: true,
    });
  }

  onChangePassword() {
    this.setProps({
      isEditableProfile: true,
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
                                {{{Avatar}}}
                                <p class="profile__name">Иван</p>
                                {{{ Inputs }}}
                                <div class="profile__actions">  
                                    {{#if isEditableProfile}}                   
                                        {{{ ButtonSave }}}
                    
                                    {{ else }}
                                        {{{ ButtonChangeProfile }}}
                                        {{{ ButtonChangePass }}}
                                        {{{ ButtonExit }}}
                                    {{/if}}
                                </div>
                       </form>`;
  }
}
