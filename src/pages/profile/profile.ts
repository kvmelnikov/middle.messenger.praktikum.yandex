import { Avatar } from '../../components/avatar/avatar';
import { Button } from '../../components/button/button';
import { Fieldset } from '../../components/input/fieldset';
import { Input } from '../../components/input/input';
import { InputError } from '../../components/input/input-error';
import { LeftNavigate } from '../../components/left-navigate/left-navigate';
import Block from '../../framework/Block';
import { IInput } from '../../shared/input.interface';

const inputsData: IInput[] = [
  {
    label: 'Почта',
    placeholder: '',
    name: 'email',
    type: 'email',
    value: 'pochta@yandex.ru',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Логин',
    placeholder: '',
    name: 'login',
    type: 'text',
    value: 'ivanivanov',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Имя',
    placeholder: '',
    name: 'first_name',
    type: 'text',
    value: 'Иван',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Фамилия',
    placeholder: '',
    name: 'second_name',
    type: 'text',
    value: 'Иванов',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Имя в чате',
    placeholder: '',
    name: 'display_name',
    type: 'text',
    value: 'Иван',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Телефон',
    placeholder: '',
    name: 'phone',
    type: 'text',
    value: '+7 (909) 967 30 30',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
];
const inputsData2: IInput[] = [
  {
    label: 'Почта2',
    placeholder: '',
    name: 'email',
    type: 'text',
    value: 'pochta2@yandex.ru',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Логин2',
    placeholder: '',
    name: 'login',
    type: 'text',
    value: 'ivanivanov',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Имя',
    placeholder: '',
    name: 'first_name',
    type: 'text',
    value: 'Иван',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Фамилия',
    placeholder: '',
    name: 'second_name',
    type: 'text',
    value: 'Иванов',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Имя в чате',
    placeholder: '',
    name: 'display_name',
    type: 'text',
    value: 'Иван',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
  {
    label: 'Телефон',
    placeholder: '',
    name: 'phone',
    type: 'tel',
    value: '+7 (909) 967 30 30',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
      required: 'required',
    },
  },
];
export class Profile extends Block {
  isEditable: false;
  disabled: boolean;
  constructor(props: any) {
    super({
      ...props,
      isEditable: false,
      LeftNavigate: new LeftNavigate({}),
      Avatar: new Avatar({
        src: '../../../public/images/avatar-example.png',
        className: 'avatar_big',
      }),
      Inputs: inputsData.map(
        dataForm =>
          new Fieldset({
            class: 'profile__info-line',
            name: dataForm.name,
            label: dataForm.label,
            error: new InputError({
              name: dataForm.name,
              text: dataForm.errorText,
            }),
            input: new Input({
              class: 'input-profile',
              dataInput: dataForm,
              onBlur: (e: Event) => this.onBlur(e),
            }),
          })
      ),
      ButtonChangeProfile: new Button({
        text: 'Изменить данные',
        class: 'button__apperance',
        onClick: (e: Event) => {
          console.log(e, 'profile buttton');
          this.onChangeEditable();
        },
      }),
      ButtonChangePass: new Button({
        text: 'Изменить пароль',
        class: 'button__apperance',
        onClick: (e: Event) => {
          this.onChangeEditable();
        },
      }),
      ButtonExit: new Button({
        text: 'Выйти',
        class: 'button__apperance',
        onClick: (e: Event) => {
          this.onChangeEditable();
        },
      }),
      ButtonSave: new Button({
        text: 'Сохранить',
        class: 'button__apperance',
        onClick: (e: Event) => {
          this.onChangeEditable();
        },
      }),
    });
  }

  onChangeEditable() {
    this.setProps({
      isEditable: true,
    });

    this.setLists({
      Inputs: inputsData2.map(dataForm => new Input({ dataForm: dataForm })),
    });
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
                    </main>`;
  }
}

//    <form >
//         <div class="profile__info-line">
//             <label class="profile__label">Старый пароль</label>
//             {{> InputProfile name="oldPassword" placeholder="" type="password" value="secret" disabled="false" }}
//         </div>
//         <div class="profile__info-line">
//             <label class="profile__label">Новый пароль</label>
//             {{> InputProfile name="newPassword" placeholder="" type="password" value="secret" disabled="false" }}
//         </div>
//              <div class="profile__info-line">
//             <label class="profile__label">Повторите новый пароль</label>
//             {{> InputProfile placeholder="" type="password" value="secret" disabled="false" }}
//         </div>
//     </form>
