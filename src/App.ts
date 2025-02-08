import { Login } from "./pages/login/login";
import { MainPage } from "./pages/main-page/main-page";
import { Profile } from "./pages/profile/profile";
import { Signin } from "./pages/signin/siginin";

interface AppState {
  currentPage: string;
  action: string;
}

export default class App {
  private state: AppState;

  private appElement: HTMLElement | null;

  private currentElementPage: HTMLElement | null;

  constructor() {
    this.state = {
      currentPage: "login",
      action: "default",
    };
    this.appElement = document.getElementById("app");
  }

  render() {
    if (this.state.currentPage === "login") {
      this.currentElementPage = new Login().getContent();
      if (this.appElement) {
        this.appElement.innerHTML = "";
        this.appElement.append(this.currentElementPage);
      }
    }
    if (this.state.currentPage === "signin") {
      this.currentElementPage = new Signin().getContent();
      if (this.appElement) {
        this.appElement.innerHTML = "";
        this.appElement.append(this.currentElementPage);
      }
    }

    if (this.state.currentPage === "mainPage") {
      this.currentElementPage = new MainPage().getContent();
      if (this.appElement) {
        this.appElement.innerHTML = "";
        this.appElement.append(this.currentElementPage);
      }
    }

    if (this.state.currentPage === "profile") {
      this.currentElementPage = new Profile().getContent();
      if (this.appElement) {
        this.appElement.innerHTML = "";
        this.appElement.append(this.currentElementPage);
      }
    }

    this.attachEventListeners();
    return "";
  }

  attachEventListeners() {
    const links = document.querySelectorAll(".link");
    const buttons = document.querySelectorAll(".button");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const currentLink = e.target as HTMLLinkElement;
        this.changePage(currentLink.dataset.page || "");
      });
    });

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const currentButton = e.target as HTMLButtonElement;
        this.changePage(currentButton.dataset.page || "");
      });
    });
  }

  changePage(page: string): void {
    this.state.currentPage = page;
    this.render();
  }

  changeAction(action: string) {
    this.state.action = action;
    this.render();
  }
}
