import Block from "../../framework/Block";
interface AvatarProps {
  className: string;
  src: string;
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({ ...props });
  }

  override render(): string {
    return '<img class="{{className}}"  src="{{src}}"  alt="Аватар">';
  }
}
