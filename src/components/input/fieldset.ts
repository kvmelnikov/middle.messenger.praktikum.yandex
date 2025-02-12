import Block from "../../framework/Block";
interface FieldsetProps {
  input: Block;
  error?: Block;
  class: string;
  label?: string;
  name: string;
}

export class Fieldset extends Block {
  constructor(props: FieldsetProps) {
    super({
      Input: props.input,
      Error: props.error || "",
      class: props.class,
      label: props.label || "",
      name: props.name,
    });
  }

  protected render(): string {
    return `
        <div class="{{class}}">
            <label class="profile__label">{{label}}</label>
            {{{ Input }}}
            {{{ Error }}}
         </div>
        `;
  }
}
//
//profile__info-line
