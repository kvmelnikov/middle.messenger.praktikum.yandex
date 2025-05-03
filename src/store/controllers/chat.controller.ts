import { ChatService } from "../services/chat.service";
import { createChatWebSocket } from "../services/webSocket";

export class ChatController {
  private chatService: ChatService;
  constructor() {
    this.chatService = new ChatService();
  }

  public startChat(chatId: number, userId: number) {
    this.chatService
      .GetChatUserToken(chatId)
      .then(({ token }) => {
        createChatWebSocket({ userId, chatId, token }).send("ping");
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
