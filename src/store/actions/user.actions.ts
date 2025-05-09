import { IUser } from "../../shared/user.interface";
import store from "../Store";

export const updateAvatar = (path: string) => {
  store.set("profile_avatar", path);
};

export const saveUsers = (users: IUser[]) => {
  store.set("users", users);
};
