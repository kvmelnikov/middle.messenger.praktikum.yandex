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

    override render(): string{
        return `<a href="{{href}}" class="{{class}}" data-action={{dataAction}} data-page="{{dataPage}}">{{text}}</a>`
    }
}
