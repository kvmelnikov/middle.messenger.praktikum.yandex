import Block from "../../framework/Block";
import { InputProfile } from "../input-profile/input-profile";

const dataForm = [
    {
        label: 'Почта',
        placeholder: '',
        name: 'email',
        value: 'pochta@yandex.ru',
        disabled: false
    },
    {
        label: 'Логин',
        placeholder: '',
        name: 'login',
        value: 'ivanivanov',
        disabled: false
    },
    {
        label: 'Имя',
        placeholder: '',
        name: 'first_name',
        value: 'Иван',
        disabled: false
    },
    {
        label: 'Фамилия',
        placeholder: '',
        name: 'second_name',
        value: 'Иванов',
        disabled: false
    },
    {
        label: 'Имя в чате',
        placeholder: '',
        name: 'display_name',
        value: 'Иван',
        disabled: false
    },
    {
        label: 'Телефон',
        placeholder: '',
        name: 'phone',
        value: '+7 (909) 967 30 30',
        disabled: false
    },
]



const inputs = dataForm.map((el)=> new InputProfile(el)  )

export class FormProfile extends Block {
    constructor(props: any) {
        super({
            ...props,
            Inputs: inputs
        })
    }

    protected render(): string {
        return `<form>
                        {{{ Inputs }}}
                </form>`
    }
}

// <form >
// <div class="profile__info-line">
//     <label class="profile__label">Почта</label>
//     {{> InputProfile name="email" placeholder="" value="pochta@yandex.ru" disabled="false" }}
// </div>
// <div class="profile__info-line">
//     <label class="profile__label">Логин</label>
//     {{> InputProfile name="login" placeholder="" value="ivanivanov" disabled="(isProfileType editProfile)" }}
// </div>
// <div class="profile__info-line">
//     <label class="profile__label">Имя</label>
//     {{> InputProfile name="first_name" placeholder="" value="Иван" disabled="(isProfileType editProfile)" }}
// </div>
// <div class="profile__info-line">
//     <label class="profile__label">Фамилия</label>
//     {{> InputProfile name="second_name" placeholder="" value="Иванов" disabled="(isProfileType editProfile)" }}
// </div>
// <div class="profile__info-line">
//     <label class="profile__label">Имя в чате</label>
//     {{> InputProfile name="display_name" placeholder="" value="Иван" disabled="(isProfileType editProfile)" }}
// </div>
// <div class="profile__info-line">
//     <label class="profile__label">Телефон</label>
//     {{> InputProfile name="phone" placeholder="" value="+7 (909) 967 30 30" disabled="(isProfileType editProfile)" }}
// </div>
// </form>
