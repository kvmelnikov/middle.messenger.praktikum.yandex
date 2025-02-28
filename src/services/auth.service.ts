import { baseUrl } from "../App";
import { setLogin } from "../store/Actions";
import { HTTPTransport } from "./HTTPTransport";

export class AuthService {
  http: HTTPTransport;
  constructor() {
    this.http = new HTTPTransport();
  }

  public async signup(username: string, password: string) {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    try {
      const response = this.http.post(`${baseUrl}auth/signup`, {
        data,
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      setLogin("test");
    }
  }

  public async signin(username: string, password: string) {
    const data = JSON.stringify({ login: "Kirill", password: "2080" });
    try {
      const response = this.http.post(`${baseUrl}auth/signin`, {
        data,
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      setLogin("test");
    }
  }

  public async getUser(username: string, password: string) {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    try {
      const response = this.http.get(`${baseUrl}auth/user`);
      return response;
    } catch (error) {
      setLogin("test");
    }
  }

  public async logout() {
    try {
      const response = this.http.post(`${baseUrl}auth/user`);
      return response;
    } catch (error) {
      setLogin("test");
    }
  }
}
