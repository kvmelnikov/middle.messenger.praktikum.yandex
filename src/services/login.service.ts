import { HTTPTransport } from "./HTTPTransport";

class LoginService {
  http: HTTPTransport;
  constructor() {
    this.http = new HTTPTransport();
  }

  async login(username: string, password: string) {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    try {
      const response = this.http.post("http://api/login", {
        data,
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (error) {
      throw error;
    }
  }
}
