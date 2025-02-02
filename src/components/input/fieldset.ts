import Block from "../../framework/Block";
interface FieldsetProps {
    input: Block,

}

export class Fieldset extends Block {
    constructor(props: FieldsetProps) {
        super({
            Input: props.input
        })
    }

    protected render(): string {
        return `
        <div class="profile__info-line">
            <label class="profile__label">Почта</label>
        {{{ Input }}}
         </div>
        `
    }
}
