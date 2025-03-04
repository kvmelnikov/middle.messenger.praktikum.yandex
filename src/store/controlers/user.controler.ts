import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import store from "../Store";

export class UserController {
  private userService: UserService;
  private authService: AuthService;

  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
  }
  public getUser() {
    this.authService
      .getUserRequest()
      .then((user) => {
        store.set("user", user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
