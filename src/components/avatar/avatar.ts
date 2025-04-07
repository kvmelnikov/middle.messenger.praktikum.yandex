import Block, { BlockProps } from "../../framework/Block";
import { connect } from "../../framework/HOC";
interface AvatarProps extends BlockProps {
  className?: string;
  src?: string;
  onClick?: (e: Event) => void;
}
class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({
      ...props,
      src: props.src || "daf",
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
    return '<img class="{{className}}" src="{{src}}"  alt="Аватар">';
  }
}

const mapStateToProps = (state: BlockProps, ownProps: AvatarProps) => {
  const props = {
    src: state.profile_avatar,
  } as AvatarProps;

  return props;
};

export default connect(mapStateToProps)(Avatar);
