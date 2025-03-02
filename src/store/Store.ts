import { BlockProps } from "../framework/Block";
import EventBus from "../framework/EventBus";

export enum StoreEvents {
  Updated = "updated",
}

export interface Indexed<T = unknown> {
  [key: string]: T;
}

// function set(state: Indexed, path: string, value: unknown){
//   return { user: { name: 'John' }
// }

class Store extends EventBus {
  private _state: Indexed = {};
  static _instance: Store;

  constructor() {
    if (Store._instance) {
      return Store._instance;
    }
    super();

    Store._instance = this;
  }

  public set(path: string, value: unknown) {
    this._state = set(this._state, path, value);

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

function set(object: Indexed, path: string, value: unknown): Indexed {
  // Если объект не является объектом или равен null, возвращаем его без изменений
  if (typeof object !== "object" || object === null) {
    return object;
  }

  // Разбиваем путь на массив ключей
  const keys = path.split(".");
  let current = object as Indexed;

  // Проходим по всем ключам, кроме последнего
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    // Если текущий ключ не существует или не является объектом, создаем новый объект
    if (!current[key] || typeof current[key] !== "object") {
      current[key] = {};
    }

    // Переходим на следующий уровень вложенности
    current = current[key] as Indexed;
  }

  // Устанавливаем значение по последнему ключу
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;

  return object;
}

export default new Store();
