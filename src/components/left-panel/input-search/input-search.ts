import Block from "../../../framework/Block";

export class InputSearch extends Block {
    constructor(props: any){
        super({...props, 
            
        })
    }

    override render(): string {
        return `<input class="input" placeholder="Поиск" type="text" name="" id="">`
    }
}
