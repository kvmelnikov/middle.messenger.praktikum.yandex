import Block from "../../framework/Block";
import { ChatService } from "../../store/services/chat.service";

import Input from "../input/input-file";

interface DialogAvatarChatProps {
  heading: string;
  close?: () => void;
  chatId: number;
}
export class DialogAvatarChat extends Block {
  isFile: boolean;

  service: ChatService;

  file: File | null;

  constructor(props: DialogAvatarChatProps) {
    super({
      ...props,
      events: {
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
            this.onFileUpload();
          }
        },
      }),
    });

    this.service = new ChatService();
    this.isFile = false;
  }

  onSubmitFile(form: HTMLFormElement) {
    if (this.file) {
      const formData = new FormData(form);
      formData.set("chatId", this.props.chatId.toString());
      formData.set("avatar", this.file);
      this.service.uploadChatAvatar(formData);
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
