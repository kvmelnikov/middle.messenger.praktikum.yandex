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
            events: { 
                keyup: (e: Event) => {
                  if(props.onKeyup) {
                    props.onKeyup(e)
                    console.log('keyup')
                  }
                },
                focus: (e: Event) => {
                  e.stopPropagation()
                  console.log('focus')
                },
                blur: (e) => {
                  e.stopPropagation()
                    console.log('blur')
                    if(props.onBlur) {
                      props.onBlur(e)
                    }
                 
                }

              }
        })
    }

    override render(): string {
        return '<input class="input input-profile"  placeholder="{{placeholder}}" {{disabled}} type="{{type}}" value="{{value}}" >'
        // return `<div class="profile__info-line">
        //             <label class="profile__label">Почта</label>
        //            
        //         </div>`
    }

}

// {{#if (isProfileType editProfile)}}
// <input class="input input-profile"  placeholder="{{placeholder}}" disabled="true" type="{{type}}" value="{{value}}" >
//     {{else}}
//     <input class="input input-profile" name="{{name}}" placeholder="{{placeholder}}"  type="{{type}}" value="{{value}}" >
//    {{/if}}
   
