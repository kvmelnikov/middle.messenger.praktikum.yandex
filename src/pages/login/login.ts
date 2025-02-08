import { Button } from "../../components/button/button";
import { Fieldset } from "../../components/input/fieldset";
import { Input } from "../../components/input/input";
import { InputError } from "../../components/input/input-error";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";
import { IInput } from "../../shared/input.interface";

const dataInputs: IInput[] = [
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
    type: "text`",
    value: "ivanivanov",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
];
export class Login extends Block {
  constructor() {
    super({
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      Inputs: dataInputs.map(
        (dataInput) =>
          new Fieldset({
            class: "form-login__info-line",
            name: dataInput.name,
            label: dataInput.label,
            error: new InputError({
              name: dataInput.name,
              text: dataInput.errorText,
            }),

            input: new Input({
              class: "input-profile",
              dataInput: dataInput,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),
      Link: new Link({
        class: "link-login",
        dataAction: "default",
        dataPage: "signin",
        text: "Нет аккаунта?",
      }),
      ButtonEnter: new Button({
        text: "Войти",
        class: "button__apperance",
        onClick: () => {},
        dataAction: "default",
        type: "submit",
      }),
    });
  }

  onChangeEditable() {
    throw new Error("Method not implemented.");
  }

  onBlur(e: Event) {
    super.onBlur(e);
  }
  onSubmit(e: Event) {
    e.preventDefault();
    super.onSubmit(e);
  }

  protected render(): string {
    return `<form class="form-login">
    <h5 class="form-login__heading">Вход</h5>
    <div class="form-login__info-line">
        {{{ Inputs }}}
    </div>
    <div class="form-login__actions">
        {{{ ButtonEnter }}}
        {{{ Link }}}
    </div>
        </form>`;
  }
}
