import { IValidator } from "./validator.interface";

export interface IInput {
  label?: string;
  placeholder: string;
  name: string;
  title?: string;
  type: string;
  value: string;
  errorText: string;
  validators?: IValidator;
}
