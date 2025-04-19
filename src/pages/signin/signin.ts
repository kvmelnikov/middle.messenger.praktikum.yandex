import { Button } from "../../components/button/button";
import { Fieldset } from "../../components/input/fieldset";
import Input from "../../components/input/input";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";
import { AuthService } from "../../store/services/auth.service";

import { IInput } from "../../shared/input.interface";
import connect from "../../framework/HOC";

const dataInputs: IInput[] = [
  {
    label: "Логин",
    placeholder: "Введите логин",
    name: "login",
    type: "text",
    value: "",
    errorText: "Введите логин",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Пароль",
    placeholder: "Введите пароль",
    name: "password",
    type: "password",
    value: "",
    errorText: "введите текст",
    validators: {
      minlength: "3",
      maxlength: "20",
      pattern: "",
      required: "required",
    },
  },
];
class Signin extends Block {
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
        href: "/signup",
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
        onClick: () => {},
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

  onSubmit(e: Event) {
    e.preventDefault();
    super.onSubmit(e);
    const dataForm: Record<string, string> = {};
    this.lists.Inputs.forEach((el) => {
      const childInput = el;
      if (
        (childInput.getChildren("Input").getContent() as HTMLInputElement)
          .validity.valid
      ) {
        dataForm[childInput.getProps("name") as string] = (
          childInput.getChildren("Input").getContent() as HTMLInputElement
        ).value;
      }
    });

    this.service.signin(dataForm.login, dataForm.password);
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

// const mapStateToProps = (state: any) => {
//   // return {
//   //   email: state.user?.email ?? "",
//   //   login: state.user?.login ?? "",
//   // };
// };

// export default connect(mapStateToProps)(Signin);
export default Signin;
