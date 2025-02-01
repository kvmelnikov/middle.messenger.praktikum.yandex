import Block from "../../framework/Block";
import { IInputProfile } from "../../shared/input-profile.interface";
import { InputProfile } from "../input-profile/input-profile";

interface FormProps {
    inputsData: IInputProfile[]
    header: string
  }

export class FormProfile extends Block {
    constructor(props: FormProps) {
        super({
            ...props,
            header: props.header,
            Inputs: props.inputsData.map((dataForm)=> new InputProfile({dataForm: dataForm}))
        })
    }

    protected render(): string {
        return `<form>
                    {{header}}
                    {{{ Inputs }}}
                </form>`
        }
}
