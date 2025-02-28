import { setLogin } from "../store/Actions";
import { HTTPTransport } from "./HTTPTransport";

export class LoginService {
  baseUrl = "https://ya-praktikum.tech/api/v2/";
  http: HTTPTransport;
  constructor() {
    this.http = new HTTPTransport();
  }

  public async login(username: string, password: string) {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    try {
      const response = this.http.post(this.baseUrl, {
        data,
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      setLogin("test");
    }
  }
}
