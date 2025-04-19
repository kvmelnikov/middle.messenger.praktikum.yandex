import { IChat } from "../../shared/chat.interface";
import { HTTPTransport } from "./HTTPTransport";
import { baseUrl } from "../../App";
import { setChats } from "../actions/chat.actions";
export class ChatService {
  http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport();
  }

  public async getChats(offset = 0, limit = 10, title = "") {
    return this.http
      .get<IChat[]>(`${baseUrl}/chats`, {
        query: { offset, limit, title },
        credentials: true,
      })
      .then((chats) => {
        setChats(chats as IChat[]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public async createChat(title: string) {
    return this.http
      .post(`${baseUrl}/chats`, {
        data: JSON.stringify({ title }),
        headers: { "Content-Type": "application/json" },
        credentials: true,
      })
      .then((res) => {
        console.info(res);
        // setChats(res as IChat[]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
