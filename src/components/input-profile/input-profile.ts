import Block from "../../framework/Block";

export class InputProfile extends Block {
    constructor(props: any) {
        super({...props})
    }

    protected render(): string {
        return `
         <div class="profile__info-line">
                        <label class="profile__label">Почта</label>
        <input class="input input-profile"  placeholder="{{placeholder}}" disabled="true" type="{{type}}" value="{{value}}" >
                </div>
        `
    }

}

// {{#if (isProfileType editProfile)}}
// <input class="input input-profile"  placeholder="{{placeholder}}" disabled="true" type="{{type}}" value="{{value}}" >
//     {{else}}
//     <input class="input input-profile" name="{{name}}" placeholder="{{placeholder}}"  type="{{type}}" value="{{value}}" >
//    {{/if}}
   
