import { IProfile } from "../../shared/profile.interface";
import { toRecord } from "../../shared/utils/to-record";
import store from "../Store";

// export const setLogin = (data: string) => {
//   store.set("login.name", "kirill");
// };

export const setProfile = (data: IProfile) => {
  store.set("profile", toRecord(data));
};
