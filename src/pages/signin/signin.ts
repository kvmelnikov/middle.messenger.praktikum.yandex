import { Button } from "../../components/button/button";
import { Fieldset } from "../../components/input/fieldset";
import Input from "../../components/input/input";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";
import { AuthService } from "../../store/services/auth.service";
import { signinInputs } from "../../shared/data-types-form";
import { router } from "../../App";

class Signin extends Block {
  service: AuthService;

  constructor() {
    super({
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },

      Inputs: signinInputs.map(
        (form) =>
          new Fieldset({
            class: "form-login__info-line",
            name: form.name,
            label: form.label,
            input: new Input({
              class: "input-profile",
              placeholder: form.placeholder,
              minlength: form.validators?.minlength,
              maxlength: form.validators?.maxlength,
              required: "required",
              name: form.name,
              type: form.type,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),
      LinkSignup: new Link({
        class: "link-login",
        dataAction: "default",
        dataPage: "signin",
        text: "Нет аккаунта?",
        href: "/signup",
        onClick: () => {
          router.go("/signup");
        },
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

  onSubmit(e: Event) {
    e.preventDefault();
    super.onSubmit(e);

    const parentDataForm = super.onSubmit(e);

    this.service.signin(parentDataForm.login, parentDataForm.password);

    return parentDataForm;
  }

  protected render(): string {
    return `<form class="form-login">
              <h5 class="form-login__heading">Вход</h5>
              <div class="form-login__info-line">
                {{{ Inputs }}}
              </div>
              <div class="form-login__actions">
                {{{ ButtonEnter }}}
                {{{ LinkSignup }}}
                {{{ LinkMainPage }}}
              </div>
            </form>`;
  }
}

export default Signin;
