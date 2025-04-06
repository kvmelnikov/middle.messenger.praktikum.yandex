import Block, { BlockProps } from "../../framework/Block";
import { connect } from "../../framework/HOC";
import { IInput } from "../../shared/input.interface";
import { UserService } from "../../store/services/user.service";

interface InputFileProps extends BlockProps {
  value?: string;
  disabled?: boolean;
  class?: string;
  name: string;
  type: string;
  onChange: (e: Event) => void;
}
class InputFile extends Block {
  service: UserService;
  constructor(props: InputFileProps) {
    super({
      ...props,
      class: props.class,
      name: props.name,
      type: props?.type,
      events: {
        change: (e: Event) => {
          props.onChange(e);
          //       const target = e.target as HTMLInputElement;
          //      const file: File | null = target.files?.[0] || null;
        },
      },
    });
  }

  override render(): string {
    return `<input  class="input" accept="image/png, image/jpeg" name="{{name}}" type="file" >`;
  }
}

// Пример использования с компонентом
const mapStateToProps = (state: BlockProps, ownProps: InputFileProps) => {
  //const profile = state.profile as Record<string, string>;

  console.log(state);

  return {
    // value: profile ? profile[ownProps.dataInput.name] : "",
    // Можно добавить другие значения из хранилища
    // ...ownProps // Если нужно сохранить оригинальные пропсы
  };
};

export default connect(mapStateToProps)(InputFile);
