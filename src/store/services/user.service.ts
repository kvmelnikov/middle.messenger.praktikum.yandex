import { baseUrl, router } from "../../App";
import { HTTPTransport } from "./HTTPTransport";

export class UserService {
  http: HTTPTransport;
  constructor() {
    this.http = new HTTPTransport();
  }

  public async updateUserProfile(data: Record<string, string>) {
    this.http
      .put(`${baseUrl}user/profile`, {
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: true,
      })
      .then((res) => {
        router.go("/profile");
      })
      .catch((err: { reason: string }) => {
        alert(err.reason);
      });
  }

  updateUserPassword(data: any) {
    this.http
      .put(`${baseUrl}user/password`, {
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: true,
      })
      .then((res) => {
        router.go("/profile");
      })
      .catch((err: { reason: string }) => {
        alert(err.reason);
      });
  }

  updateUserAvatar(formData: FormData) {
    return this.http
      .put(`${baseUrl}user/profile/avatar`, {
        credentials: true,
        data: formData,
      })
      .then((res) => {
        router.go("/profile");
      })
      .catch((err: { reason: string }) => {
        alert(err.reason);
      });
  }

  searchUser(data: any) {
    return this.http.post(`${baseUrl}user/search`, data);
  }
}
