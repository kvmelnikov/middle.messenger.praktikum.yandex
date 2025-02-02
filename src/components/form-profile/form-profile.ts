import Block from "../../framework/Block";
import { IInputProfile } from "../../shared/input.interface";
import { InputProfile } from "../input/input";
const inputsData: IInputProfile[] = [
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
    {
        label: 'Имя',
        placeholder: '',
        name: 'first_name',
        value: 'Иван',
     
    },
    {
        label: 'Фамилия',
        placeholder: '',
        name: 'second_name',
        value: 'Иванов',

    },
    {
        label: 'Имя в чате',
        placeholder: '',
        name: 'display_name',
        value: 'Иван',
  
    },
    {
        label: 'Телефон',
        placeholder: '',
        name: 'phone',
        value: '+7 (909) 967 30 30',
      
    },
]
interface FormProps {
    inputsData: IInputProfile[]
    header: string
  }

export class FormProfile extends Block {
    constructor(props: FormProps) {
        super({
            ...props,
            header: props.header,
        })
    }

    protected render(): string {
        return `<form>
                    {{{dataForInputs}}}
                    {{{header}}}
                      {{{ Inputs}}}    
                </form>`
        }
}
