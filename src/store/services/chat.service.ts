import { IChat } from "../../shared/chat.interface";
import { HTTPTransport } from "./HTTPTransport";
import { baseUrl } from "../../App";
import { setChats } from "../actions/chat.actions";
import { IChatUser } from "../../shared/chat-user.interface";
import { IUser } from "../../shared/user.interface";
import { saveUsers } from "../actions/user.actions";
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

  public getChats(offset = 0, limit = 10, title = "") {
    this.http
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

  public addUserToChat(data: IChatUser) {
    this.http
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

  public createChat(title: string) {
    this.http
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

  public uploadChatAvatar(data: FormData) {
    this.http
      .put(`${baseUrl}chats/avatar`, {
        data,
        credentials: true,
      })
      .then(() => {
        this.getChats();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public deleteChat(chatId: number) {
    this.http
      .delete(`${baseUrl}/chats/`, {
        data: JSON.stringify({ chatId }),
        credentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        this.getChats();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public async GetChatUserToken(id: number): Promise<{ token: string }> {
    try {
      const response = await this.http.post(`${baseUrl}chats/token/${id}`, {
        credentials: true,
      });
      return response as { token: string };
    } catch (error: unknown) {
      throw new Error("Произошла ошибка при получении токена.");
    }
  }

  public GetChatUsers(id: number) {
    this.http
      .get(`${baseUrl}chats/${id}/users/`, {
        credentials: true,
      })
      .then((res: IUser[]) => {
        saveUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public deleteUsersFromChat(data: IChatUser) {
    this.http
      .delete(`${baseUrl}chats/users/`, {
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
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
