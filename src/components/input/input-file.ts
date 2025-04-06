import Block, { BlockProps } from "../../framework/Block";
import { connect } from "../../framework/HOC";
import { IInput } from "../../shared/input.interface";

interface InputFileProps extends BlockProps {
  value?: string;
  disabled?: boolean;
  class?: string;
  name: string;
  type: string;
}
class InputFile extends Block {
  constructor(props: InputFileProps) {
    super({
      ...props,
      class: props.class,
      name: props?.name,
      type: props?.type,
    });
  }

  override render(): string {
    return `<input  class="input" accept="image/png, image/jpeg" name="{{name}}" type="{{type}}" >`;
  }
}

// Пример использования с компонентом

export default InputFile;
