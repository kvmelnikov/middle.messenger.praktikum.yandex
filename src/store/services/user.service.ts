import { baseUrl } from "../../App";
import { HTTPTransport } from "./HTTPTransport";

export class UserService {
  http: HTTPTransport;
  constructor() {
    this.http = new HTTPTransport();
  }

  updateUserProfile(data: any) {
    return this.http.put(`${baseUrl}user/profile`, data);
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
