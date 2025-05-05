import WSTransport, { WSEvents } from "../services/webSocket";
import store from "../Store";
// import { transformMessagesFromApi } from "../core/utils/transformers";
import { IUser } from "../../shared/user.interface";
import { IMessage } from "../../shared/message.interface";
import { ChatService } from "../services/chat.service";
export const BASE_URL_WS = "wss://ya-praktikum.tech/ws/";

export class MessagesController {
  private sockets: Map<number, WSTransport> = new Map();

  static _instance: MessagesController;

  private baseURL: string;

  private chatService: ChatService;

  constructor(baseURL: string) {
    if (MessagesController._instance) {
      return MessagesController._instance;
    }
    this.baseURL = baseURL;
    this.chatService = new ChatService();
  }

  private subscribe(transport: WSTransport, chatId: number) {
    transport.on(
      WSEvents.Message,
      (
        message: any // any temp
      ) => this.onMessage(chatId, message)
    );
    transport.on(WSEvents.Close, () => this.onClose(chatId));
  }

  public async connect(chatId: number) {
    if (this.sockets.has(chatId)) {
      return;
    }

    const { token } = await this.chatService.GetChatUserToken(chatId);
    const userId = (store.getState().user as IUser)?.id;
    const wsTransport = new WSTransport(
      `${this.baseURL}${userId}/${chatId}/${token}`
    );
    this.sockets.set(chatId, wsTransport);

    await wsTransport.connect();
    this.subscribe(wsTransport, chatId);
    this.getMessages(chatId);
  }

  public postMessage(chatId: number, message: string) {
    const socket = this.sockets.get(chatId);

    if (!socket) {
      throw new Error(`Chat with id:${chatId} is not connected.`);
    }

    socket.send({
      type: "message",
      content: message,
    });
  }

  public getMessages(chatId: number) {
    const socket = this.sockets.get(chatId);
    if (!socket) {
      throw new Error(`Chat with id:${chatId} is not connected.`);
    }

    socket.send({
      type: "get old",
      content: null,
    });
  }

  public closeChats() {
    const chats = Array.from(this.sockets.values());
    chats.forEach((socket) => socket.close());
  }

  private onClose(chatId: number) {
    this.sockets.delete(chatId);
  }

  private onMessage(chatId: number, messages: IMessage | IMessage[]) {
    let messagesToAdd: IMessage[] = [];

    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse();
    } else {
      messagesToAdd.push(messages);
    }

    const currentMessages = (store.getState().messages || {})[chatId] || [];
    messagesToAdd = [...(currentMessages as IMessage[]), ...messagesToAdd];
    store.set(`messages.${chatId}`, messagesToAdd);
  }
}

export default new MessagesController(`${BASE_URL_WS}/chats/`);
