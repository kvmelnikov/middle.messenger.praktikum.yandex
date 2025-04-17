import Block, { BlockProps } from "../../framework/Block";
import { connect } from "../../framework/HOC";
//import { IInput } from "../../shared/input.interface";
import { ChatParticipant } from "../chat-participant/chat-participant";
import { HeaderLeftPanel } from "../header-left-panel/header-left-panel";

// const dataInput: IInput = {
//   label: "",
//   placeholder: "Поиск",
//   name: "Поиск",
//   type: "text",
//   errorText: "",
// };
interface LeftPanelProps extends BlockProps {
  value?: string;
  number: 2;
}

class LeftPanel extends Block {
  constructor(props: LeftPanelProps) {
    super({
      HeaderLeftPanel: new HeaderLeftPanel({
        // InputSearch: new Input({
        //   class: "input-search",
        //   dataInput: dataInput,
        //   onKeyup: (e: KeyboardEvent) => {
        //     if (e.key === "Enter") {
        //       // this.onSearch();
        //     }
        //   },
        // }),
      }),
      // ChatParticipants:   new ChatParticipant(),
    });
  }

  protected render(): string {
    return `<section class="left-panel">
                 {{{ HeaderLeftPanel }}}
                 {{{ ChatParticipants }}}
            </section>`;
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {};
};

export default connect(mapStateToProps)(LeftPanel);
