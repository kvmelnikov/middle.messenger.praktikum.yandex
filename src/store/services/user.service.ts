import { baseUrl, router } from "../../App";
import { IProfile } from "../../shared/profile.interface";
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

  public async updateUserPassword(data: any) {
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

  public async updateUserAvatar(formData: FormData) {
    return this.http
      .put(`${baseUrl}user/profile/avatar`, {
        credentials: true,
        data: formData,
      })
      .then((res: IProfile) => {
        updateAvatar(
          `https://ya-praktikum.tech/api/v2/resources/${res.avatar}`
        );
        https: router.go("/profile");
      })
      .catch((err: { reason: string }) => {
        alert(err.reason);
      });
  }

  public async resourcesFile(path: string) {
    return this.http
      .get(`${baseUrl}resources/${path}`, {
        credentials: true,
      })
      .then((file: File) => {
        console.log("херь какая то");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public async searchUser(login: string) {
    return this.http
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
