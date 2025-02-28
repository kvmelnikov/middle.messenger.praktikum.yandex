import { FormSignin } from "../../components/form-signin/form-signin";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";
import { connect } from "../../framework/HOC";
class Signin extends Block {
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

const mapStateToProps = (state: any) => {
  return {
    // Здесь вы можете маппить нужные части состояния в пропсы компонента
    // Например:
    email: state.user?.email ?? "",
    login: state.user?.login ?? "",
  };
};

export default connect(mapStateToProps)(Signin);
