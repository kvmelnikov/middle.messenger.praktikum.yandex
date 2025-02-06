import Block from "../../framework/Block";

export class ErrorPage extends Block { 
    constructor(){
        super({})
    }

    protected render(): string {
        return `<main class="error-page"> 
                    <h2 class="error-page__heading">{{error}}</h2>
                    <p class="error-page__text">{{error-message}}</p>
                </main>`
    }
}
