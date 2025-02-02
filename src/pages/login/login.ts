import { Input } from "../../components/input/input";
import Block from "../../framework/Block";
import { IInput } from "../../shared/input.interface";

const dataInputs: IInput[] = [
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
]
export class Login extends Block {
    constructor(){
        super({
            Inputs: dataInputs.map((dataInput) => new Input({ class: 'input-profile', dataInput: dataInput, onBlur: this.onBlur})),
        })
    }
    
    onBlur(e: Event) {
        super.onBlur(e)
    }

    protected render(): string {
         return `<form class="form-login">
    <h5 class="form-login__heading">Вход</h5>
    <div class="form-login__info-line">
        {{{ Inputs }}}
    </div>
    <div class="form-login__actions">
        {{> ButtonApperance data-page="mainPaige" data-action="default" class="button__apperance" text="Авторизоваться" }}
        {{> Link data-page="signin" data-action="default" text="Нет аккаунта?" class="link link-login" }}
    </div>
        </form>`
    }
}
