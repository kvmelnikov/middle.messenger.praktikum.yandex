import Block, { BlockProps } from "../../framework/Block";

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
      // events: {
      //   click: (e: Event) => {
      //     const modal = this.getChildren("Modal");
      //     modal.show();
      //   },
      // },
    });
  }

  override render(): string {
    return `
    <div>
      {{{ Modal }}}
    <img class="{{className}}" src="{{src}}"  alt="Аватар">
    </div>
    `;
  }
}

// const mapStateToProps = (state: BlockProps, ownProps: AvatarProps) => {
//   const props = {
//     src: state.profile_avatar,
//   } as AvatarProps;

//   return props;
// };

// export default connect(mapStateToProps)(Avatar);
export default Avatar;
