import Block from "../../framework/Block";

export class Avatar extends Block {
    constructor(){
        super()
    }

    override render(): string {
        return `<img class=""  src=""  alt="Аватар">`
       // return `<img class="{{class}}"  src="{{src}}"  alt="Аватар">`
    }
}
