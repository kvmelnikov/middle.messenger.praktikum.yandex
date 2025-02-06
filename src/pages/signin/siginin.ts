import { Fieldset } from '../../components/input/fieldset';
import { Input } from '../../components/input/input';
import { InputError } from '../../components/input/input-error';
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
  {
    label: 'Пароль',
    placeholder: '',
    name: 'password',
    type: 'password',
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
    label: 'Пароль (ещё раз)',
    placeholder: '',
    name: 'password',
    type: 'password',
    value: 'Иванов',
    errorText: 'введите текст',
    validators: {
      minlength: '2',
      maxlength: '40',
      pattern: '',
      required: 'required',
    },
  },
];

export class Signin extends Block {
  constructor() {
    super({
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
    });
  }

  protected render(): string {
    return `<main class="signin">
                    <form class="form-signin">
                    {{{ Inputs }}}
                    </form>
               </main>`;
  }
}

// <form class="form-signin">
//     <h5 class="form-signin__heading">Регистрация</h5>
//     <div class="form-signin__info-line">
//         <label class="form-signin__label">Почта</label>
//         {{> InputLogin name="email" type="email" value="pochta@yandex.ru"}}
//     </div>
//     <div class="form-signin__info-line">
//         <label class="form-signin__label">Логин</label>
//         {{> InputLogin name="login" type="text" value="ivanivanov"}}
//     </div>
//     <div class="form-signin__info-line">
//         <label class="form-signin__label">Имя</label>
//         {{> InputLogin name="first_name" type="text" value="Иван"}}
//     </div>
//     <div class="form-signin__info-line">
//         <label class="form-signin__label">Фамилия</label>
//         {{> InputLogin name="second_name" type="text" value="Иванов"}}
//     </div>
//     <div class="form-signin__info-line">
//         <label class="form-signin__label">Телефон</label>
//         {{> InputLogin name="phone" type="text" value="+7 (909) 967 30 30"}}
//     </div>
//     <div class="form-signin__info-line">
//         <label class="form-signin__label">Пароль</label>
//         {{> InputLogin name="password" type="password" value="+7 (909) 967 30 30"}}
//     </div>
//     <div class="form-signin__info-line">
//         <label class="form-signin__label">Пароль (ещё раз)</label>
//         {{> InputLogin name="password" type="password" value="+7 (909) 967 30 30"}}
//     </div>
//     <div class="form-signin__actions">
//         {{> ButtonApperance data-page="mainPaige" data-action="default"  class="button__apperance" text="Зарегистрироваться" }}
//         {{> Link data-page="mainPaige" data-action="default" text="Войти" class="link link-login" }}
//     </div>
// </form>
