import Input from "../../components/input/input";
import Block from "../../framework/Block";
import { ChatService } from "../../store/services/chat.service";

const dataInput = {
  placeholder: "Поиск",
  name: "search",
  type: "text",
  errorText: "",
};

class FormSearch extends Block {
  service: ChatService;

  constructor() {
    super({
      events: {
        submit: (e: Event) => this.onSubmitSearch(e),
      },
      InputSearch: new Input({
        type: "text",
        placeholder: "Поиск",
        dataInput: dataInput,
      }),
    });
    this.service = new ChatService();
  }

  onBlur(e: Event) {
    e.preventDefault();
    super.onBlur(e);
  }

  onSubmitSearch(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const textSearch = formData.get("search") as string;

    this.service.getChats(0, 10, textSearch);
  }

  protected render(): string {
    return `<form class="form-search">
                {{{ InputSearch }}}
            </form>`;
  }
}

// const mapStateToProps = (state: any) => {
//   // return {
//   //   email: state.user?.email ?? "",
//   //   login: state.user?.login ?? "",
//   // };
// };

// export default connect(mapStateToProps)(Signin);
export default FormSearch;
