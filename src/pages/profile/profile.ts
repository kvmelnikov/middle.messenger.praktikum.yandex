import { Avatar } from "../../components/avatar/avatar";
import { LeftNavigate } from "../../components/left-navigate/left-navigate";
import Block from "../../framework/Block";

export class Profile extends Block {
    constructor(props: any) {
        super({
            ...props,
            LeftNavigate: new LeftNavigate({}),
            Avatar: new Avatar({
                src: '../../../public/images/avatar-example.png',
                className: 'avatar_big',
            }),
        })
    }

    protected override render(): string {
     
        if (this.props.action === "default") {
            return `<main class="profile">
                    {{{LeftNavigate}}}
                       <div class="profile__main">
                            {{{Avatar}}}
                            <p class="profile__name">Иван</p>
                       </div>
                </main>`
        }
        else {
            return '<div></div>'
        }
    }
}

// <main class="profile">
//     {{> LeftNavigate}}
//     <div class="profile__main">
//         {{> Avatar src="../../../public/images/avatar-example.png" class="avatar_big profile__avatar" }}
//         <p class="profile__name">Иван</p>
//         {{#if (isPasswordChange editProfile)}}
//             {{> FormProfilePasword}}
//         {{else}}
//             {{> FormProfile}}
//         {{/if}}
//         <div class="profile__actions">
//             {{#if (isProfileType editProfile)}}
//             {{>Link text="Изменить данные" data-action="change-profile" data-page="profile" class="link profile__link"}}
//             {{>Link text="Изменить пароль" data-action="change-password" data-page="profile" class="link profile__link"}}
//             {{>Link text="Выйти" data-action="change-profile" data-page="profile" class="link profile__link-exit"}}
//             {{else}}
//              {{> ButtonApperance class="button__apperance" text="Сохранить" }}
//             {{/if}}
//         </div>
//     </div>
// </main>
