import Block from '../../../framework/Block';
interface InputSearchProps {
  onKyeup: (e: Event) => void
}

export class InputSearch extends Block {
  constructor(props: InputSearchProps) {
    super({ ...props,
      events: { 
        keyup: (e: Event) => {
          props.onKyeup(e)
    
        }        
      }
    });
   
  }
  
  override render(): string {
    return '<input  class="input input-search" placeholder="Поиск" type="text" name="" id="">';
  }
}
