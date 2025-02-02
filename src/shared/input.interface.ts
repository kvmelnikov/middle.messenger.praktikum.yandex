import { IValidator } from "./validator.interface"

export interface IInput {
    label: string
    placeholder: string
    name: string
    value: string
    errorText: string
    validators: IValidator
}
