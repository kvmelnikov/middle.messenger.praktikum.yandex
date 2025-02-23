import Block from "../../framework/Block";

export class DialogWindow extends Block {
  protected render(): string {
    return `
        <div class="dialog-window">
            <h5 class=s"dialog-window__heading">{{heading}}</h5>
            <div class="dialog-window__info-line">
            <label class="dialog-window__label">Логин</label>
                {{> InputLogin name="login" value="ivanivanov"}}
            </div>
        {{> ButtonApperance data-page="mainPaige" data-action="default" class="button__apperance" text="Удалить" }}
        </div>`;
  }
}
