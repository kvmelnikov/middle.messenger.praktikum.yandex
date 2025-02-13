import { Button } from "../../components/button/button";
import { FormProfile } from "../../components/form-profile/form-profile";
import { LeftNavigate } from "../../components/left-navigate/left-navigate";
import Block from "../../framework/Block";

export class Profile extends Block {
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
  }

  protected override render(): string {
    return `<main class="profile">
                        {{{LeftNavigate}}}
                        {{{FormProfile}}}
                    </main>`;
  }
}
