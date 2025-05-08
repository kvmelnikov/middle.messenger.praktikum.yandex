import { FormSignup } from "../../components/form-signup/form-signup";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";

class Signup extends Block {
  constructor() {
    super({
      Link: new Link({
        class: "profile-link",
        dataPage: "mainPage",
        text: "Войти",
      }),
      FormSignup: new FormSignup(),
    });
  }

  render(): string {
    return `<main class="signin">
            {{{ FormSignup }}}
            </main>`;
  }
}

export default Signup;
