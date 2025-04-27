import { IInput } from "./input.interface";

export const inputsProfile: IInput[] = [
  {
    label: "Почта",
    placeholder: "",
    name: "email",
    type: "email",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Логин",
    placeholder: "",
    name: "login",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Имя",
    placeholder: "",
    name: "first_name",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Фамилия",
    placeholder: "",
    name: "second_name",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Имя в чате",
    placeholder: "",
    name: "display_name",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Телефон",
    placeholder: "",
    name: "phone",
    type: "text",

    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
];

export const inputsPassword: IInput[] = [
  {
    label: "Старый пароль",
    placeholder: "",
    name: "oldPassword",
    type: "password",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Новый пароль",
    placeholder: "",
    name: "newPassword",
    type: "password",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Повторите новый пароль",
    placeholder: "",
    name: "newPassword",
    type: "password",
    errorText: "введите текст",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
];

export const signinInputs: IInput[] = [
  {
    label: "Логин",
    placeholder: "Введите логин",
    name: "login",
    type: "text",

    errorText: "Введите логин",
    validators: {
      minlength: "2",
      maxlength: "40",
      pattern: "",
      required: "required",
    },
  },
  {
    label: "Пароль",
    placeholder: "Введите пароль",
    name: "password",
    type: "password",
    errorText: "введите текст",
    validators: {
      minlength: "3",
      maxlength: "20",
      pattern: "",
      required: "required",
    },
  },
];
