import { Button } from "../../components/button/button";
import { FormProfile } from "../../components/form-profile/form-profile";
import { LeftNavigate } from "../../components/left-navigate/left-navigate";
import Block from "../../framework/Block";
import { connect } from "../../framework/HOC";
import { UserController } from "../../store/controlers/user.controler";

class Profile extends Block {
  userController: UserController;

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
    this.userController = new UserController();
    // this.userController.getUser();
  }
  protected init(): void {
    super.init();
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
