import Block from "../../framework/Block";
import { IInput } from "../../shared/input.interface";
interface InputProps {
  class: string;
  dataInput: IInput;
  onKeyup?: (e: Event) => void;
  onBlur?: (e: Event) => void;
}
export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      class: props.class,
      value: props.dataInput.value,
      placeholder: props.dataInput.placeholder,
      minlength: props.dataInput.validators?.minlength || "0",
      maxlength: props.dataInput.validators?.maxlength || "99999999",
      name: props.dataInput.name,
      required: props.dataInput.validators?.required || "",

      events: {
        keyup: (e: Event) => {
          if (props.onKeyup) {
            props.onKeyup(e);
          }
        },
        blur: (e: Event) => {
          e.stopPropagation();
          if (props.onBlur) {
            props.onBlur(e);
          }
        },
      },
    });
  }

  override render(): string {
    return '<input class="input {{class}}" name="{{name}}" maxlength="{{maxlength}}" minlength="{{minlength}}" {{required}} placeholder="{{placeholder}}" {{disabled}} type="{{type}}" value="{{value}}" >';
  }
}
