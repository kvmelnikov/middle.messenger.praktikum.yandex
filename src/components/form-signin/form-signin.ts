import Block from "../../framework/Block";
import { IInput } from "../../shared/input.interface";
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
  {
    label: "Пароль",
    placeholder: "",
    name: "password",
    type: "password",
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
    label: "Пароль (ещё раз)",
    placeholder: "",
    name: "password",
    type: "password",
    value: "Иванов",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
];
export class FormSignin extends Block {
  constructor() {
    super({
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      Inputs: inputsData.map(
        (dataForm) =>
          new Fieldset({
            class: "form-signin__info-line",
            name: dataForm.name,
            label: dataForm.label,
            input: new Input({
              class: "input-profile",
              dataInput: dataForm,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),
      Button: new Button({
        text: "Зарегистрироваться",
        class: "button__apperance",
        type: "submit",
      }),
    });
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    super.onSubmit(e);
  }

  protected render(): string {
    return `<form class="form-signin">
                <h5 class="form-signin__heading">Регистрация</h5>
                    {{{ Inputs }}}
                <div class="form-signin__actions">
                    {{{Button}}}
                </div>
            </form>`;
  }
}
