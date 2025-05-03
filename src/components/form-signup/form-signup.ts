import Block from "../../framework/Block";
import { AuthService, SignupData } from "../../store/services/auth.service";
import { IInput } from "../../shared/input.interface";
import { Button } from "../button/button";
import { Fieldset } from "../input/fieldset";
import Input from "../input/input";
import { inputsSignup } from "../../shared/data-types-form";

export class FormSignup extends Block {
  service: AuthService;
  constructor() {
    super({
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      Inputs: inputsSignup.map(
        (form: IInput) =>
          new Fieldset({
            class: "form-signin__info-line",
            name: form.name,
            label: form.label,
            input: new Input({
              class: "input-profile",
              placeholder: form.placeholder,
              maxlength: form.validators?.maxlength,
              minlength: form.validators?.minlength,
              required: form.validators?.required,
              name: form.name,
              type: form.type,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),
      Button: new Button({
        text: "Зарегистрироваться",
        class: "button__apperance",
        type: "submit",
      }),
    });

    this.service = new AuthService();
  }

  onSubmit(e: Event) {
    e.preventDefault();

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

    this.service.signup(dataForm as SignupData);
    return dataForm;
  }

  protected render(): string {
    return `<form class="form-signin">
                  <h5 class="form-signin__heading">Регистрация</h5>
                      {{{ Inputs }}}
                  <div class="form-signin__actions">
                      {{{Button}}}
                  </div>
              </form>`;
  }
}
