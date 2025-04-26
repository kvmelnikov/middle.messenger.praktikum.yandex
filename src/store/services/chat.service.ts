import { IChat } from "../../shared/chat.interface";
import { HTTPTransport } from "./HTTPTransport";
import { baseUrl } from "../../App";
import { setChats } from "../actions/chat.actions";
import { IChatUser } from "../../shared/chat-user.interface";
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

  public async addUserToChat(data: IChatUser) {
    return this.http
      .put(`${baseUrl}chats/users`, {
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: true,
      })
      .then((res) => {
        console.info(res);
      })
      .catch((err) => console.error(err));
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

  public async GetChatUserToken(id: number) {
    return this.http
      .post(`${baseUrl}chats/token/${id}`, {
        credentials: true,
      })
      .then((res) => {
        console.info(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default new ChatService();
