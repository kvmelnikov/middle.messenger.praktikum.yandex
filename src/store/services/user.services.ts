import { baseUrl } from "../../App";
import { HTTPTransport } from "./HTTPTransport";
import { router } from "../../App";
import { setProfile } from "../actions/auth.actions";
import { IProfile } from "../../shared/profile.interface";

export class UserService {
  http: HTTPTransport;
  constructor() {
    this.http = new HTTPTransport();
  }

  public async editProfile(data: IProfile) {
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
}
