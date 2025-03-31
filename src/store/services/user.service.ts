import { baseUrl, router } from "../../App";
import { IProfile } from "../../shared/profile.interface";
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
    return this.http.put(`${baseUrl}user/password`, data);
  }

  updateUserAvatar(data: any) {
    return this.http.put(`${baseUrl}user/profile/avatar`, data);
  }

  searchUser(data: any) {
    return this.http.post(`${baseUrl}user/search`, data);
  }
}
