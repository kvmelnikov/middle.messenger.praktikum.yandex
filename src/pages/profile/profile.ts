import { Button } from "../../components/button/button";
import FormProfile from "../../components/form-profile/form-profile";
import { LeftNavigate } from "../../components/left-navigate/left-navigate";
import Block from "../../framework/Block";

import { AuthService } from "../../store/services/auth.service";

class Profile extends Block {
  service: AuthService;

  constructor() {
    super({
      isEditable: false,
      LeftNavigate: new LeftNavigate(),
      FormProfile: new FormProfile({}),
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
    return `
            <div class="wrapper">
              <main class="profile">
                        {{{ LeftNavigate }}}
                        {{{ FormProfile }}}
                    </main>
            </div>        
                    `;
  }
}

export default Profile;
