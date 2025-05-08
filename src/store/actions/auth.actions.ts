import { IUser } from "../../shared/user.interface";
import store from "../Store";

// export const setLogin = (data: string) => {
//   store.set("login.name", "kirill");
// };

export const setProfile = (data: IUser) => {
  store.set("user", data);
};
