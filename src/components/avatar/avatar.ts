import Block from "../../framework/Block";
interface AvatarProps {
  className: string;
  src: string;
  onClick?: (e: Event) => void;
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {},
      },
    });
  }

  override render(): string {
    return '<img class="{{className}}"  src="{{src}}"  alt="Аватар">';
  }
}
