import { baseUrl } from "../../App";
import { HTTPTransport } from "./HTTPTransport";
import { router } from "../../App";
import { setProfile } from "../actions/auth.actions";
import { updateAvatar } from "../actions/user.actions";
import { IUser } from "../../shared/user.interface";

export type SignupData = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
};

export class AuthService {
  http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport();
  }

  public signup(signupData: SignupData) {
    this.http
      .post(`${baseUrl}auth/signup`, {
        data: JSON.stringify(signupData),
        headers: { "Content-Type": "application/json" },
        credentials: true,
      })
      .then(() => {
        router.go("/chat");
      })
      .catch((err: { reason: string }) => {
        console.error(err);
      });
  }

  public signin(login: string, password: string) {
    this.http
      .post(`${baseUrl}auth/signin`, {
        data: JSON.stringify({ login: login, password: password }),
        headers: { "Content-Type": "application/json" },
        credentials: true,
      })
      .then(() => {
        router.go("/chat");
      })
      .catch((err) => {
        alert(err);
      });
  }

  public getUser() {
    this.http
      .get(`${baseUrl}auth/user`, {
        credentials: true,
      })
      .then((res: IUser) => {
        setProfile(res);
        updateAvatar(
          `https://ya-praktikum.tech/api/v2/resources/${res.avatar}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public logout() {
    this.http
      .post(`${baseUrl}auth/logout`, {
        credentials: true,
      })
      .then(() => {
        router.go("/signin");
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
