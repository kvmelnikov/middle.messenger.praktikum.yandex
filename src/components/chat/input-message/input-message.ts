import Block from '../../../framework/Block';

export class InputMessage extends Block {
  constructor(props: any) {
    super({ ...props,
      placeholder: props.placeholder,
      class: props.class,
      type: props.type,

    });
  }

  render(): string {
    return '<input placeholder="{{placeholder}}" class="input {{class}}" type="{{type}}">';    
  }
}
