import Block from "../../framework/Block";
import Input from "./input";
interface FieldsetProps {
  input: Input;
  error?: string;
  class: string;
  label?: string;
  name: string;
}

export class Fieldset extends Block {
  constructor(props: FieldsetProps) {
    const inputWithHandlers = () => {
      // :TODO помоги пожалуйста я не пойму как мне привязать ошибку в инпут, данный вариант не работает, подскажи пожаулуйста как мне правильно сделать
      props.input.setProps({
        onBlur: (error: string) => this.onError(error),
      });
      return props.input;
    };
    super({
      ...props,
      Input: inputWithHandlers(),
      error: props.error || "",
      class: props.class,
      label: props.label || "",
      name: props.name,
      onBlur: (error: string) => {
        this.onError(error);
      },
    });
  }

  onError(error: string): void {
    this.setProps({ error });
  }

  protected render(): string {
    return `
        <div class="{{class}}">
            <label class="profile__label">{{label}}</label>
            {{{ Input }}}
            {{ error }}
         </div>
        `;
  }
}
//
//profile__info-line
