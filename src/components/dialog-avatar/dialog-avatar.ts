import Block from "../../framework/Block";
import { UserService } from "../../store/services/user.service";
import Input from "../input/input-file";

interface DialogAvatarProps {
  heading: string;
  close?: () => void;
}
export class DialogAvatar extends Block {
  isFile: boolean;

  service: UserService;

  file: File | null;

  constructor(props: DialogAvatarProps) {
    super({
      ...props,
      events: {
        onClick: () => {
          console.log("click");
        },
        submit: (e: Event) => {
          e.preventDefault();
          console.log(e.target as HTMLFormElement);
          if (this.isFile) {
            this.onSubmitFile(e.target as HTMLFormElement);
          }
        },
      },
      InputFile: new Input({
        name: "avatar",
        type: "file",
        errorText: "введите текст",
        class: "profile__info-line",
        onChange: (e: Event) => {
          const target = e.target as HTMLInputElement;
          const file: File | null = target.files?.[0] || null;
          this.file = file;

          if (file) {
            console.log(file);
            this.onFileUpload();
          }
        },
      }),
    });

    this.service = new UserService();
    this.isFile = false;
  }

  onSubmitFile(form: HTMLFormElement) {
    if (this.file) {
      const formData = new FormData(form);

      this.service.updateUserAvatar(formData);
    }
  }

  onFileUpload() {
    this.isFile = true;
  }

  protected render(): string {
    return `
            <form class="dialog-window">
                <h5 class="dialog-window__heading">{{heading}}</h5>
                {{{InputFile}}}
                <input type="submit">
            </form>
            </div>
     `;
  }
}
