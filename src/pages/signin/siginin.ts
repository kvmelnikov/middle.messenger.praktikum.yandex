import { FormSignin } from "../../components/form-signin/form-signin";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";
export class Signin extends Block {
  constructor() {
    super({
      Link: new Link({
        class: "profile-link",
        dataPage: "mainPage",
        text: "Войти",
      }),
      FormSignin: new FormSignin(),
    });
  }

  render(): string {
    return `<main class="signin">
              {{{ FormSignin }}}
            </main>`;
  }
}
