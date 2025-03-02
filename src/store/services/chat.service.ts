import { HTTPTransport } from "./HTTPTransport";

export class ChatService {
  http: HTTPTransport;
  constructor() {
    this.http = new HTTPTransport();
  }

  public async getChats() {
    return this.http.get("/chats");
  }
}
