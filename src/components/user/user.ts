import Block from "../../framework/Block";

interface UserParticipantProps {
  id: number;
  name: string;
  onClick: (id: number) => void;
}
export class UserParticipant extends Block {
  constructor(props: UserParticipantProps) {
    super({
      ...props,
      events: {
        click: () => {
          props.onClick(props.id);
        },
      },
    });
  }

  override render(): string {
    return `<li>
                {{name}}
            </li>`;
  }
}
