import Block from "../../framework/Block";

export class Link extends Block {
    constructor(props: any) {
        super({...props, 
             events: {
                click: (e: Event) => {
                  props.onClick(e);
                },
              },
              attr: {
                class: 'link',
              },             
        })
    }

    changeStyles() {
        this.setProps({ attr: {
          class: '',
        } });
      }

    override render(): string{
        return `<a href="{{href}}" class="{{class}}" data-action={{data-action}} data-page="{{data-page}}">{{text}}</a>`
    }
}
