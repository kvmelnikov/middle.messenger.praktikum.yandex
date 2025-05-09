import Block, { BlockProps } from "../../framework/Block";
import connect from "../../framework/HOC";

interface AvatarChatParticipantProps extends BlockProps {
  className?: string;
  src?: string;
  onClick?: (e: Event) => void;
}
class AvatarChatParticipant extends Block {
  constructor(props: AvatarChatParticipantProps) {
    super({
      ...props,
      src: props.src,
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

const mapStateToProps = (state: BlockProps): AvatarChatParticipantProps => {};

export default connect(AvatarChatParticipant, mapStateToProps);
