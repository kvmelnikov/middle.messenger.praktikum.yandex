import Block, { BlockProps } from "../../framework/Block";
import { connect } from "../../framework/HOC";
import { IInput } from "../../shared/input.interface";
import { IProfile } from "../../shared/profile.interface";
interface InputProps extends BlockProps {
  value?: Record<string, string>;
  placeholder?: string;
  class?: string;
  dataInput: IInput;
  onKeyup?: (e: Event) => void;
  onBlur?: (e: Event) => void;
}
class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      class: props.class,
      value: props.value ? props.value[props.dataInput.name] : "empty",
      placeholder: props.dataInput?.placeholder,
      minlength: props.dataInput?.validators?.minlength || "0",
      maxlength: props.dataInput?.validators?.maxlength || "99999999",
      pattern: props.dataInput?.validators?.pattern || "*",
      name: props.dataInput?.name,
      required: props.dataInput?.validators?.required || "",
      title: props.dataInput?.title || "",
      type: props.dataInput?.type,

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
    return '<input class="input {{class}}" name="{{name}}" title="{{title}}" pattern="{{pattern}}" maxlength="{{maxlength}}" minlength="{{minlength}}" {{required}} placeholder="{{placeholder}}" {{disabled}} type="{{type}}" value="{{value}}" >';
  }
}

const mapStateToProps = (state: BlockProps): InputProps => {
  const profile = state.profile as IProfile;

  const props = {
    value: profile?.login,
  };

  return props;
};

export default connect(mapStateToProps)(Input);
