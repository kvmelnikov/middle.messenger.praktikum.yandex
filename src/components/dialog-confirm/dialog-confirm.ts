import Block from "../../framework/Block";
import { Button } from "../button/button";

interface DialogConfirmProps {
  heading: string;
  onDelete: () => void;
  onCancel: () => void;
}
export class DialogConfirm extends Block {
  constructor(props: DialogConfirmProps) {
    super({
      ...props,
      events: {
        onClick: () => {
          console.log("click");
        },
      },
      ButtonYes: new Button({
        text: "Да",
        type: "button",
        class: "button__apperance",
        onClick: () => {
          props.onDelete();
        },
      }),
      ButtonNo: new Button({
        text: "Нет",
        type: "button",
        class: "button__apperance",
        onClick: () => {
          props.onCancel();
        },
      }),
    });
  }

  protected render(): string {
    return `
            <div class="dialog-window">
                <h5 class="dialog-window__heading">{{heading}}</h5>
                    Вы уверены что хотите удалить?
                    <div class="dialog-window__buttons">
                      {{{ButtonYes}}}
                      {{{ButtonNo}}}
                    </div>
            </div>
            
     `;
  }
}
