import EventBus from "../../framework/EventBus";

export enum WSEvents {
  Connected = "connected",
  Error = "error",
  Message = "message",
  Close = "close",
}

export default class WSTransport extends EventBus {
  private socket: WebSocket | null = null;

  private ping: NodeJS.Timeout | number;

  constructor(private websocketUrl: string) {
    super();
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error("Socket is not connected");
    }

    this.socket.send(JSON.stringify(data));
  }

  public connect(): Promise<void> {
    this.socket = new WebSocket(this.websocketUrl);

    this.subscribe(this.socket);

    this.setupPing();

    return new Promise((resolve) => {
      this.on(WSEvents.Connected, () => {
        resolve();
      });
    });
  }

  public close() {
    (this.socket as WebSocket)?.close();
  }

  private setupPing() {
    this.ping = setInterval(() => {
      this.send({ type: "ping" });
    }, 5000);

    this.on(WSEvents.Close, () => {
      clearInterval(this.ping);

      this.on(WSEvents.Close, () => {
        if (this.ping) {
          clearInterval(this.ping);
          this.ping = 0;
        }
      });
    });
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener("open", () => {
      this.emit(WSEvents.Connected);
    });
    socket.addEventListener("close", () => {
      this.emit(WSEvents.Close);
    });

    socket.addEventListener("error", (error) => {
      this.emit(WSEvents.Error, error);
    });

    socket.addEventListener("message", (message) => {
      const data = JSON.parse(message.data);

      if (data.type && data.type === "pong") {
        return;
      }

      this.emit(WSEvents.Message, data);
    });
  }
}
