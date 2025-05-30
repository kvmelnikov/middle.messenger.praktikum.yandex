import { IChat } from "../../shared/chat.interface";
import store from "../Store";

export const setChats = (res: IChat[]) => {
  store.set("loaded", true);
  store.set("chats", res);
};

export const setCurrentChatId = (id: number) => {
  store.set("currentChatId", id);
};
