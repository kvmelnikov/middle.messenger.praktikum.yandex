import { BlockProps } from "../framework/Block";
import EventBus from "../framework/EventBus";

export enum StoreEvents {
  Updated = "updated",
}

// function set(state: Indexed, path: string, value: unknown){
//   return { user: { name: 'John' }
// }

class Store extends EventBus {
  private _state: BlockProps = {};
  static _instance: Store;

  constructor() {
    if (Store._instance) {
      return Store._instance;
    }
    super();

    Store._instance = this;
  }

  public set(path: string, value: unknown) {
    // this.state = set(this.state, path, value);

    // метод EventBus

    this.emit(StoreEvents.Updated);
  }

  public getState(): BlockProps {
    return { test: "test" };
  }

  public delState() {
    this.emit(StoreEvents.Updated);
    this._state = {};
  }
}

export default new Store();
