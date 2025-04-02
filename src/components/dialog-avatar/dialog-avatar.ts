import Block from "../../framework/Block";

interface DialogAvatarProps {
  heading: string;
}
export class DialogAvatar extends Block {
  constructor(props: DialogAvatarProps) {
    super({
      //   InputLogin: new Fieldset({
      //     class: "profile__info-line",
      //     name: "login",
      //     label: "Логин",
      //     input: new Input({
      //       dataInput: {
      //         label: "Логин",
      //         placeholder: "",
      //         name: "login",
      //         type: "file",
      //         errorText: "введите текст",
      //         validators: {
      //           minlength: "2",
      //           maxlength: "40",
      //           pattern: "",
      //           required: "required",
      //         },
      //       },
      //       class: "profile__info-line",
      //       onBlur: (e: Event) => this.onBlur(e),
      //     }),
      //   }),
    });
  }

  protected render(): string {
    return `
        <div class="dialog-window">
            <h5 class=s"dialog-window__heading">{{heading}}</h5>
            <div class="dialog-window__info-line">
            <label class="dialog-window__label">Логин</label>
                
            </div>
        
        </div>`;
  }
}
