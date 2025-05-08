import { IInput } from "../../shared/input.interface";
import { IUser } from "../../shared/user.interface";
import { Fieldset } from "../input/fieldset";
import Input from "../input/input";

export function prepareInputsToForm(
  currentUser: IUser,
  inputs: IInput[],
  disabled: boolean = false
): Fieldset[] {
  return inputs.map((form) => {
    return new Fieldset({
      class: "profile__info-line",
      name: form.name,
      label: form.label,
      input: new Input({
        class: "input-profile",
        placeholder: form.placeholder,
        minlength: form.validators?.minlength,
        maxlength: form.validators?.maxlength,
        pattern: form.validators?.pattern,
        required: form.validators?.required,
        name: form.name,
        type: form.type,
        disabled: disabled,
        value: currentUser?.hasOwnProperty(form.name)
          ? (currentUser[form.name as keyof IUser] as string)
          : "",
      }),
    });
  });
}
