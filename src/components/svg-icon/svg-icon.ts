import Block from "../../framework/Block";
interface SvgIconProps {
  path: string;
  alt: string;
  height: string;
}
export class SvgIcon extends Block {
  constructor(props: SvgIconProps) {
    super({ ...props, path: props.path, alt: props.alt, height: props.height });
  }

  render() {
    return '<img src="{{path}}" alt="{{alt}}"  height="{{height}}">';
  }
}
