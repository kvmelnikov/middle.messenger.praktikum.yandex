import Block from "../../framework/Block";
import { IInputProfile } from "../../shared/input-profile.interface";
interface InputProps {
    dataForm: IInputProfile
  }
export class InputProfile extends Block {
    constructor(props: InputProps) {
        super({...props})
        
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
   
