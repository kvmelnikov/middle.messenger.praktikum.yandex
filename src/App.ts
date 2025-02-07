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
    const Buttons = document.querySelectorAll(".button");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const link = e.target as HTMLLinkElement;
        this.changePage(link.dataset.page || "");
      });
    });

    Buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const button = e.target as HTMLButtonElement;
        this.changePage(button.dataset.page || "");
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
