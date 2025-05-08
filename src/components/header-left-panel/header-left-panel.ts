import { router } from "../../App";
import Block, { BlockProps } from "../../framework/Block";
import { DialogChat } from "../dialog-chat/dialog-chat";
import { Link } from "../link/Link";
import { Modal } from "../modal/modal";
import { SvgIcon } from "../svg-icon/svg-icon";
import FormSearch from "../form-search/form-search";
import connect from "../../framework/HOC";
import { Button } from "../button/button";
import { AuthService } from "../../store/services/auth.service";

interface HeaderLeftPanelProps {
  loaded?: boolean;
}
class HeaderLeftPanel extends Block {
  authService: AuthService;

  constructor(props: HeaderLeftPanelProps) {
    super({
      ...props,
      CreateChat: new SvgIcon({
        path: "../../../public/images/add_user.png",
        height: "15px",
        width: "15px",
        alt: "управление профилем",
        onClick: () => {
          const modal = this.getChildren("Modal");

          if (modal) {
            modal.show();
          }
        },
      }),
      ButtonLogout: new Button({
        text: "выйти",
        type: "button",
        class: "button button-logout",
        onClick: () => {
          this.authService.logout();
        },
      }),
      Modal: new Modal({
        className: "modal",
        dialog: new DialogChat({
          heading: "Создание чата",
        }),
        onClick: () => {},
      }),
      LinkProfile: new Link({
        class: "profile-link",
        dataPage: "profile",
        dataAction: "default",
        text: "Профиль >",
        onClick: (e: Event) => {
          e.preventDefault();
          router.go("/profile");
        },
      }),
      FormSearch: new FormSearch(),
    });
    this.authService = new AuthService();
  }

  protected componentDidUpdate(
    oldProps: BlockProps,
    newProps: BlockProps
  ): boolean {
    const { loaded: newLoaded } = newProps;
    const { loaded: oldLoaded } = oldProps;

    if (newLoaded && newLoaded !== oldLoaded) {
      // Сравниваем loaded
      const modal = this.getChildren("Modal");
      if (modal) {
        modal.hide();
      }
    }
    return true;
  }

  override render(): string {
    return `<header class="header-left-panel">         
                    <div class="header-left-panel__user">
                      {{{ ButtonLogout }}}
                      {{{ LinkProfile }}}
                    </div>
                    <div class="header-left-panel__chat">
                      {{{ CreateChat }}}
                      {{{ FormSearch }}}
                    </div>
              {{{ Modal }}}
            </header>`;
  }
}

const mapStateToProps = (state: BlockProps): HeaderLeftPanelProps => {
  const loaded = state.loaded;

  return { loaded };
};

export default connect(HeaderLeftPanel, mapStateToProps);
