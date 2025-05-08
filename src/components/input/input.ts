import Block, { BlockProps } from "../../framework/Block";

interface InputProps extends BlockProps {
  value?: string;
  disabled?: boolean;
  class?: string;
  placeholder?: string;
  minlength?: string;
  maxlength?: string;
  name: string;
  required?: string;
  type: string;
  onKeyup?: (e: Event) => void;
  onBlur?: (e: Event) => void;
}
class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
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
          } else {
            this.onBlur(e);
          }
        },
      },
    });
  }

  override render(): string {
    if (this.props.disabled) {
      return `<input disabled="{{disabled}}" class="input {{class}}" name="{{name}}" title="{{title}}" pattern="{{pattern}}" maxlength="{{maxlength}}" minlength="{{minlength}}" {{required}} placeholder="{{placeholder}}" {{disabled}} type="{{type}}" value="{{value}}" >`;
    } else {
      return `<input class="input {{class}}" name="{{name}}" maxlength="{{maxlength}}" minlength="{{minlength}}" {{required}} placeholder="{{placeholder}}" {{disabled}} type="{{type}}" value="{{value}}" >`;
    }
  }
}

export default Input;
