import Router from "./framework/Router";
import Signin from "./pages/signin/signin";
import { MainPage } from "./pages/main-page/main-page";
import { Profile } from "./pages/profile/profile";
import Signup from "./pages/signup/siginup";

export const baseUrl = "https://ya-praktikum.tech/api/v2/";
export const router = new Router("app");
export default class App {
  initial() {
    router.use("/signin", Signin);
    router.use("/chat", MainPage);
    router.use("/signup", Signup);
    router.use("/profile", Profile);
    router.start();
    router.go("/signin");
  }
}
