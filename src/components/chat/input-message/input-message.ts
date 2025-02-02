import Block from '../../../framework/Block';
interface InputMessageProps {
  onKyeup: (e: Event) => void
  placeholder: string
  class: string
  type: string
}

export class InputMessage extends Block {
  constructor(props: InputMessageProps) {
    super({ ...props,
      placeholder: props.placeholder,
      class: props.class,
      type: props.type,
      events: { 
        keyup: (e: Event) => {
          props.onKyeup(e)
        }        
      }

    });
  }

  render(): string {
    return '<input placeholder="{{placeholder}}" class="input {{class}}" type="{{type}}">';    
  }
}
