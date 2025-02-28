import { Button } from "../../components/button/button";
import { Fieldset } from "../../components/input/fieldset";
import { Input } from "../../components/input/input";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";
import { connect } from "../../framework/HOC";
import { AuthService } from "../../services/auth.service";

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
      minlength: "3",
      maxlength: "20",
      pattern: "",
      required: "required",
    },
  },
];
class Login extends Block {
  service: AuthService;
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
            input: new Input({
              class: "input-profile",
              dataInput: dataInput,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),
      LinkSignin: new Link({
        class: "link-login",
        dataAction: "default",
        dataPage: "signin",
        text: "Нет аккаунта?",
        href: "/signin",
      }),

      LinkMainPage: new Link({
        class: "link-login",
        dataAction: "default",
        dataPage: "mainPage",
        text: "Перейти на главную страницу",
      }),

      ButtonEnter: new Button({
        text: "Войти",
        class: "button__apperance",
        onClick: () => {
          this.onTestButton();
        },
        dataAction: "default",
        type: "submit",
      }),
    });
    this.service = new AuthService();
  }

  onBlur(e: Event) {
    e.preventDefault();
    super.onBlur(e);
  }

  onTestButton() {
    this.service.signin("test", "test");
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
        {{{ LinkSignin }}}
        {{{ LinkMainPage }}}
    </div>
        </form>`;
  }
}

const mapStateToProps = (state: any) => {
  return {
    // Здесь вы можете маппить нужные части состояния в пропсы компонента
    // Например:
    email: state.user?.email ?? "",
    login: state.user?.login ?? "",
  };
};

export default connect(mapStateToProps)(Login);
