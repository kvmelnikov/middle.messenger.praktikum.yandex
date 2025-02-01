import { Avatar } from "../../components/avatar/avatar";
import { Button } from "../../components/button/button";

import { InputProfile } from "../../components/input-profile/input-profile";
import { LeftNavigate } from "../../components/left-navigate/left-navigate";
import Block from "../../framework/Block";
import { IInputProfile } from "../../shared/input-profile.interface";

const inputsData: IInputProfile[] = [
    {
        label: 'Почта',
        placeholder: '',
        name: 'email',
        value: 'pochta@yandex.ru',
  
    },
    {
        label: 'Логин',
        placeholder: '',
        name: 'login',
        value: 'ivanivanov',

    },
    {
        label: 'Имя',
        placeholder: '',
        name: 'first_name',
        value: 'Иван',
     
    },
    {
        label: 'Фамилия',
        placeholder: '',
        name: 'second_name',
        value: 'Иванов',

    },
    {
        label: 'Имя в чате',
        placeholder: '',
        name: 'display_name',
        value: 'Иван',
  
    },
    {
        label: 'Телефон',
        placeholder: '',
        name: 'phone',
        value: '+7 (909) 967 30 30',
      
    },
]
const inputsData2: IInputProfile[] = [
    {
        label: 'Почта2',
        placeholder: '',
        name: 'email',
        value: 'pochta2@yandex.ru',
  
    },
    {
        label: 'Логин2',
        placeholder: '',
        name: 'login',
        value: 'ivanivanov',

    },
    {
        label: 'Имя',
        placeholder: '',
        name: 'first_name',
        value: 'Иван',
     
    },
    {
        label: 'Фамилия',
        placeholder: '',
        name: 'second_name',
        value: 'Иванов',

    },
    {
        label: 'Имя в чате',
        placeholder: '',
        name: 'display_name',
        value: 'Иван',
  
    },
    {
        label: 'Телефон',
        placeholder: '',
        name: 'phone',
        value: '+7 (909) 967 30 30',
      
    },
]
export class Profile extends Block {
    
    isEditable: false
    disabled: boolean
    constructor(props: any) {
        
        super({ 
            ...props,
            isEditable: false,
            LeftNavigate: new LeftNavigate({}),
            Avatar: new Avatar({
                src: '../../../public/images/avatar-example.png',
                className: 'avatar_big',
            }),
            
            Inputs: inputsData.map((dataForm)=> new InputProfile({dataForm: dataForm})),

            ButtonChangeProfile: new Button({
                text: 'Изменить данные',
                class: 'button__apperance',
                onClick: (e: Event) => {
                    console.log(e, 'profile buttton');
                    this.onChangeEditable();
                }
            }),
            ButtonChangePass: new Button({
                text: 'Изменить пароль',
                class: 'button__apperance',
                onClick: (e: Event) => {
                    this.onChangeEditable();
                }
            }),
            ButtonExit: new Button({
                text: 'Выйти',
                class: 'button__apperance',
                onClick: (e: Event) => {
                    this.onChangeEditable();
                }
            }),
            ButtonSave: new Button({
                text: 'Сохранить',
                class: 'button__apperance',
                onClick: (e: Event) => {
                    this.onChangeEditable();
                }
            })
        });
        
    }

    onChangeEditable(){
        this.setProps({
            isEditable: true,
          });

        this.setLists(({
            Inputs: inputsData2.map((dataForm)=> new InputProfile({dataForm: dataForm}))
        }))
    }



    protected override render(): string {
   
            return `<main class="profile">
                        {{{LeftNavigate}}}
                       <div class="profile__main">
                                {{{Avatar}}}
                                <p class="profile__name">Иван</p>
                           <form>
                                {{{ Inputs }}}
                           </form>
                                <div class="profile__actions">  
                                    {{#if isEditable}}                   
                                        {{{ ButtonSave }}}
                                    {{ else }}
                                        {{{ ButtonChangeProfile }}}
                                        {{{ ButtonChangePass }}}
                                        {{{ ButtonExit }}}
                                         adf
                                    {{/if}}

                                    {{{ LinkExit }}}
                                </div>
                       </div>
                    </main>`
        }
      
    }

