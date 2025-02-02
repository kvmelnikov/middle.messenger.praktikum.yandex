import Block from "../../framework/Block";
import { IInput } from "../../shared/input.interface";
interface InputProps {
    class: string
    dataInput: IInput
    onKeyup?: (e: Event) => void
    onBlur?: (e: Event) => void
  }
export class Input extends Block {
    constructor(props: InputProps) {
        super({...props,
            class: props.class,
            value: props.dataInput.value,
            placeholder: props.dataInput.placeholder,
            minlength: props.dataInput.validators?.minlength || '0',
            required: props.dataInput.validators?.required || '',
            events: { 
                keyup: (e: Event) => {
                  if(props.onKeyup) {
                    props.onKeyup(e)
                  }
                },
                blur: (e: Event) => {
                  e.stopPropagation()
                    if(props.onBlur) {
                      props.onBlur(e)
                    }
                }

              }
        })
    }

    override render(): string {
        return '<input class="input input-profile" pattern=".{1,}" minlength="{{minlength}}" {{required}}   placeholder="{{placeholder}}" {{disabled}} type="{{type}}" value="{{value}}" >'
    }

}


// minlength="2"
// maxlength="40"
// pattern="^[a-zA-Zа-яёА-ЯЁ\-/\s]+$"
// data-error-message="Оба поля могут содержать только латинские буквы, кириллические буквы, знаки дефиса и пробелы"
// required

// {{#if (isProfileType editProfile)}}
// <input class="input input-profile"  placeholder="{{placeholder}}" disabled="true" type="{{type}}" value="{{value}}" >
//     {{else}}
//     <input class="input input-profile" name="{{name}}" placeholder="{{placeholder}}"  type="{{type}}" value="{{value}}" >
//    {{/if}}
   
