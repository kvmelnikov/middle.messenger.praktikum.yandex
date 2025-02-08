import { Button } from "../../components/button/button";
import { Fieldset } from "../../components/input/fieldset";
import { Input } from "../../components/input/input";
import { InputError } from "../../components/input/input-error";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";
import { IInput } from "../../shared/input.interface";

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

export class Signin extends Block {
  constructor() {
    super({
      Inputs: inputsData.map(
        (dataForm) =>
          new Fieldset({
            class: "profile__info-line",
            name: dataForm.name,
            label: dataForm.label,
            error: new InputError({
              name: dataForm.name,
              text: dataForm.errorText,
            }),
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
        onClick: (e: Event) => {
          console.log(e, "profile buttton");
        },
      }),
      Link: new Link({
        class: "profile-link",
        dataPage: "mainPage",
        text: "Войти",
      }),
    });
  }

  render(): string {
    return `<main class="signin">
                    <form class="form-signin">
                      <h5 class="form-signin__heading">Регистрация</h5>
                      {{{ Inputs }}}
                      <div class="form-signin__actions">
                        {{{Button}}}
                        {{{ Link }}}
                     </div>
                    </form>

               </main>`;
  }
}
