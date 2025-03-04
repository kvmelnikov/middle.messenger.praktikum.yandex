import { Button } from "../../components/button/button";
import { FormProfile } from "../../components/form-profile/form-profile";
import { LeftNavigate } from "../../components/left-navigate/left-navigate";
import Block from "../../framework/Block";
import { connect } from "../../framework/HOC";
import { AuthService } from "../../store/services/auth.service";

class Profile extends Block {
  service: AuthService;
  constructor() {
    super({
      isEditable: false,
      LeftNavigate: new LeftNavigate(),
      FormProfile: new FormProfile(),
      ButtonExit: new Button({
        text: "Выйти",
        class: "button__apperance",
        dataPage: "login",
        onClick: () => {},
      }),
    });
    this.service = new AuthService();
    this.service.getUser();
  }

  protected override render(): string {
    return `<main class="profile">
                        {{{LeftNavigate}}}
                        {{{FormProfile}}}
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

export default connect(mapStateToProps)(Profile);
