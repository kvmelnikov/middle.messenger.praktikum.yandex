import Router from "./framework/Router";
import Login from "./pages/login/login";
import { MainPage } from "./pages/main-page/main-page";
import { Profile } from "./pages/profile/profile";
import Signup from "./pages/signup/siginup";
export const baseUrl = "https://ya-praktikum.tech/api/v2/";

// Применяем connect к компоненту Login
export const router = new Router("app");
export default class App {
  initial() {
    router.use("/login", Login);
    router.use("/chat", MainPage);
    router.use("/signup", Signup);
    router.use("/profile", Profile);
    router.start();
  }
}
