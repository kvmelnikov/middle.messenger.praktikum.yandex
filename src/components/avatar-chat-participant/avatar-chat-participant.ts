import Block, { BlockProps } from "../../framework/Block";

interface AvatarChatParticipantProps extends BlockProps {
  className?: string;
  src?: string;
  onClick?: (e: Event) => void;
}
export class AvatarChatParticipant extends Block {
  constructor(props: AvatarChatParticipantProps) {
    super({
      ...props,
      src: props.src || ".../../../public/svg/small-avatar-default.svg",
      events: {
        click: (e: Event) => {
          if (props.onClick) {
            props.onClick(e);
          }
        },
      },
    });
  }

  override render(): string {
    return `
          <img class="{{className}}" src="{{src}}"  alt="Аватар">`;
  }
}
