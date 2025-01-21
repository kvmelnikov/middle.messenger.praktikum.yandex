import Block from '../../framework/Block';

export class SvgIcon extends Block {
  constructor(props: any) {
    super({ ...props,
      path: props.path,
      alt: props.alt,
      height: props.height,
    });
  }

  render() {
    return '<img src="{{path}}" alt="{{alt}}"  height="{{height}}">';
  }
}
