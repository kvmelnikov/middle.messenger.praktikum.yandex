import Block from "../../framework/Block";

export class Login extends Block {
    constructor(){
        super({})
    }

    protected render(): string {
         return `<form class="form-login">
    <h5 class="form-login__heading">Вход</h5>
    <div class="form-login__info-line">
        <label class="form-login__label">Почта</label>
        {{> InputLogin name="login" type="text" value="ivanivanov"}}
    </div>
    <div class="form-login__info-line">
        <label class="form-login__label">Пароль</label>
        {{> InputLogin name="password" type="password" value="ivanivanov"}}
    </div>
    <div class="form-login__actions">
        {{> ButtonApperance data-page="mainPaige" data-action="default" class="button__apperance" text="Авторизоваться" }}
        {{> Link data-page="signin" data-action="default" text="Нет аккаунта?" class="link link-login" }}
    </div>
        </form>`
    }
}
