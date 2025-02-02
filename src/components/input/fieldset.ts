import Block from "../../framework/Block";
interface FieldsetProps {
    input: Block,
    class: string,
}

export class Fieldset extends Block {
    constructor(props: FieldsetProps) {
        super({
            Input: props.input,
            class: props.class
        })
    }

    protected render(): string {
        return `
        <div class="{{class}}">
            <label class="profile__label">Почта</label>
        {{{ Input }}}
         </div>
        `
    }
}
        // 
        //profile__info-line
