import Block from "../../framework/Block";
interface SvgIconProps {
  path: string;
  alt: string;
  height: string;
  width: string;
  onClick: (e: Event) => void;
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
          props.onClick(e);
        },
      },
    });
  }

  render() {
    return `<div> 
    
    <img class="svg-icon" src="{{path}}" alt="{{alt}}"  width="{{width}}" height="{{height}}"> </div>`;
  }
}
