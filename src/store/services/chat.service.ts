import { IChat } from "../../shared/chat.interface";
import { HTTPTransport } from "./HTTPTransport";
import { baseUrl } from "../../App";
import { setChats } from "../actions/chat.actions";
export class ChatService {
  http: HTTPTransport;
  static _instance: ChatService;

  constructor() {
    this.http = new HTTPTransport();

    if (ChatService._instance) {
      return ChatService._instance;
    }

    ChatService._instance = this;
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
        this.getChats();
        // setChats(res as IChat[]);
      })
      .catch((err) => {
        console.error(err);
        this.getChats();
      });
  }
}

export default new ChatService();
