import Block from "../../framework/Block";
interface SvgIconProps {
  path: string;
  alt: string;
  height: string;
  width: string;
  Modal?: Block;
  onClick?: (e: Event) => void;
}
export class SvgIcon extends Block {
  constructor(props: SvgIconProps) {
    super({
      ...props,
      path: props.path,
      alt: props.alt,
      height: props.height,
      events: {
        click: (e: Event) => {
          const modal = this.getChildren("Modal");
          modal.show();
        },
      },
    });
  }

  render() {
    return `<div> 
    {{{Modal}}}
    <img class="svg-icon" src="{{path}}" alt="{{alt}}"  width="{{width}}" height="{{height}}"> </div>`;
  }
}
