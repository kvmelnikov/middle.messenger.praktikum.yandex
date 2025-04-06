import Block from "../../framework/Block";
import { Fieldset } from "../input/fieldset";
import Input from "../input/input-file";

interface DialogAvatarProps {
  heading: string;
  close?: () => void;
}
export class DialogAvatar extends Block {
  constructor(props: DialogAvatarProps) {
    super({
      events: {
        onClick: () => {
          console.log("click");
        },
      },
      InputFile: new Input({
        name: "file",
        type: "file",
        errorText: "введите текст",
        class: "profile__info-line",
      }),
    });
  }

  hide() {
    console.log("s");
  }

  protected render(): string {
    return `
      
            <div class="dialog-window">
                <h5 class="dialog-window__heading">{{heading}}</h5>
                
                {{{InputFile}}}
            </div>
            </div>
     `;
  }
}
