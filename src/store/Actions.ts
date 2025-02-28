import store from "./Store";

export const setLogin = (data: string) => {
  console.log(data);
  store.set("login.name", "kirill");
};
