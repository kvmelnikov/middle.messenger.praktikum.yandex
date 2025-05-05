import { baseUrl, router } from "../../App";
import { IUser } from "../../shared/user.interface";
import { saveUsers, updateAvatar } from "../actions/user.actions";

import { HTTPTransport } from "./HTTPTransport";

export class UserService {
  http: HTTPTransport;

  static _instance: UserService;

  constructor() {
    this.http = new HTTPTransport();

    if (UserService._instance) {
      return UserService._instance;
    }
  }

  public updateUserProfile(dataForm: Record<string, string>) {
    this.http
      .put(`${baseUrl}user/profile`, {
        data: JSON.stringify(dataForm),
        headers: { "Content-Type": "application/json" },
        credentials: true,
      })
      .then(() => {
        router.go("/profile");
      })
      .catch((err: { reason: string }) => {
        alert(err.reason);
      });
  }

  public updateUserPassword(dataForm: Record<string, string>) {
    this.http
      .put(`${baseUrl}user/password`, {
        data: JSON.stringify(dataForm),
        headers: { "Content-Type": "application/json" },
        credentials: true,
      })
      .then(() => {
        router.go("/profile");
      })
      .catch((err: { reason: string }) => {
        alert(err.reason);
      });
  }

  public updateUserAvatar(formData: FormData) {
    try {
      const res = this.http.put(`${baseUrl}user/profile/avatar`, {
        credentials: true,
        data: formData,
      });
      updateAvatar(`https://ya-praktikum.tech/api/v2/resources/${res.avatar}`);
      router.go("/profile");
    } catch (err) {
      alert(err.reason);
    }
  }

  public async resourcesFile(path: string) {
    return this.http
      .get(`${baseUrl}resources/${path}`, {
        credentials: true,
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  public searchUser(login: string) {
    this.http
      .post(`${baseUrl}user/search`, {
        credentials: true,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ login: login }),
      })
      .then((res: IUser[]) => {
        saveUsers(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default new UserService();
