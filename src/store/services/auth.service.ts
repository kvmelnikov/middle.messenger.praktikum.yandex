import { baseUrl } from "../../App";
// import { setLogin } from "../actions/auth.actions";
import { HTTPTransport } from "./HTTPTransport";
import { router } from "../../App";

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

  public async signup(signupData: SignupData) {
    this.http
      .post(`${baseUrl}auth/signup`, {
        data: JSON.stringify(signupData),
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        router.go("/login");
      }) // вывод результата положительного {id: 3586}
      .catch((err: { reason: string }) => {
        alert(err.reason);
      });
  }

  public async signin(login: string, password: string) {
    this.http
      .post(`${baseUrl}auth/signin`, {
        data: JSON.stringify({ login: login, password: password }),
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        router.go("/chat");
      })
      .catch((err) => {
        alert(err);
      });
  }

  public async getUser() {
    this.http
      .get(`${baseUrl}auth/user`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public async logout() {
    try {
      const response = this.http.post(`${baseUrl}auth/user`);
      return response;
    } catch (error) {
      // setLogin("test");
    }
  }
}
