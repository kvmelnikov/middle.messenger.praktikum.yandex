import Input from "../../components/input/input";
import Block from "../../framework/Block";
import { ChatService } from "../../store/services/chat.service";

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
        name: "search",
      }),
    });
    this.service = new ChatService();
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

export default FormSearch;
