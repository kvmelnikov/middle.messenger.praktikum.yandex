import Block from '../../framework/Block';

export class Avatar extends Block {
  constructor(props: any) {
    super({ ...props });
  }

  override render(): string {
    return '<img class="{{className}}"  src="{{src}}"  alt="Аватар">';
  }
}
