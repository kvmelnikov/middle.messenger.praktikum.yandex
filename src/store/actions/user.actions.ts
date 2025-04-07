import store from "../Store";

export const updateAvatar = (path: string) => {
  store.set("profile_avatar", path);
};
