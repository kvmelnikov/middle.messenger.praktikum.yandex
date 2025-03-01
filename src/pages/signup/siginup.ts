import { FormSignup } from "../../components/form-signup/form-signup";
import { Link } from "../../components/link/Link";
import Block from "../../framework/Block";
import { connect } from "../../framework/HOC";

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

const mapStateToProps = (state: any) => {
  return {
    // Здесь вы можете маппить нужные части состояния в пропсы компонента
    // Например:
    email: state.user?.email ?? "",
    login: state.user?.login ?? "",
  };
};

export default connect(mapStateToProps)(Signup);
