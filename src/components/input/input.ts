import Block from "../../framework/Block";
import { IInput } from "../../shared/input.interface";
interface InputProps {
    class: string
    dataForm: IInput
    onKeyup?: (e: Event) => void

  }
export class Input extends Block {
    constructor(props: InputProps) {
        super({...props,
            class: props.class,
            value: props.dataForm.value,
            placeholder: props.dataForm.placeholder,
            events: { 
                keyup: (e: Event) => {
                  if(props.onKeyup) {
                    props.onKeyup(e)
                  }
                }        
              }
        })
    }

    override render(): string {

        return `<div class="profile__info-line">
                    <label class="profile__label">Почта</label>
                    <input class="input input-profile"  placeholder="{{placeholder}}" {{disabled}} type="{{type}}" value="{{value}}" >
                </div>`
    }

}

// {{#if (isProfileType editProfile)}}
// <input class="input input-profile"  placeholder="{{placeholder}}" disabled="true" type="{{type}}" value="{{value}}" >
//     {{else}}
//     <input class="input input-profile" name="{{name}}" placeholder="{{placeholder}}"  type="{{type}}" value="{{value}}" >
//    {{/if}}
   
