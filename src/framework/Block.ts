import {
  VALIDATION_ERRORS,
  VALIDATION_RULES,
} from "../shared/validation-rules";
import EventBus, { EventCallback } from "./EventBus";
import Handlebars from "handlebars";

type TBlockProps = any; // здесь реально можеть быть любое значение

export interface BlockProps {
  [key: string]: TBlockProps;
}

interface BlockLists {
  [key: string]: Block[];
}

interface BlockChildren {
  [key: string]: Block;
}

interface BlokEvents {
  [key: string]: EventCallback;
}

export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  numberParticipal: number = 0;

  protected _element: HTMLElement | null = null;

  protected _id: number = Math.floor(100000 + Math.random() * 900000);

  protected props: BlockProps;

  protected children: BlockChildren;

  protected lists: BlockLists;

  protected eventBus: () => EventBus;

  public isShow: boolean;

  constructor(propsWithChildren: BlockProps = {}) {
    const eventBus = new EventBus();
    const { props, children, lists } =
      this._getChildrenPropsAndProps(propsWithChildren);
    this.props = this._makePropsProxy({ ...props });

    this.children = this._makePropsProxy({ ...children });
    this.lists = this._makePropsProxy({ ...lists });
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  public setState(newState: BlockProps) {
    const { props, children, lists } = this._getChildrenPropsAndProps(newState);
    this.setProps(props);
    this.setLists(lists);
  }

  private _removeEvents(): void {
    const { events = {} } = this.props as {
      events?: Record<string, EventListener>;
    };
    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  private _addEvents(): void {
    const { events = {} } = this.props as { events?: BlokEvents };

    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this) as EventCallback);
    eventBus.on(
      Block.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this) as EventCallback
    );
    eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this) as EventCallback
    );
    eventBus.on(
      Block.EVENTS.FLOW_RENDER,
      this._render.bind(this) as EventCallback
    );
  }

  protected init(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  protected componentDidMount(): void {}

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(
    oldProps: BlockProps,
    newProps: BlockProps
  ): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(
    oldProps: BlockProps,
    newProps: BlockProps
  ): boolean {
    //console.log(oldProps, newProps);

    return true;
  }

  private _getChildrenPropsAndProps(propsAndChildren: BlockProps): {
    children: Record<string, Block>;
    props: BlockProps;
    lists: BlockLists;
  } {
    const children: Record<string, Block> = {};
    const props: BlockProps = {};
    const lists: BlockLists = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, lists };
  }

  protected addAttributes(): void {
    const { attr = {} } = this.props;

    Object.entries(attr).forEach(([key, value]) => {
      if (this._element) {
        this._element.setAttribute(key, value as string);
      }
    });
  }

  protected setAttributes(attr: string): void {
    Object.entries(attr).forEach(([key, value]) => {
      if (this._element) {
        this._element.setAttribute(key, value);
      }
    });
  }

  public setProps = (nextProps: BlockProps): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public setLists = (nextList: BlockLists): void => {
    if (!nextList) {
      return;
    }

    Object.assign(this.lists, nextList);
  };

  public getProps = (prop: string): TBlockProps => {
    return this.props[prop];
  };

  public getChildren = (child: string): Block => {
    return this.children[child];
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  private _render(): void {
    const isPreviusElement = this._element !== null;

    if (isPreviusElement) {
      this._removeEvents();
    }

    const propsAndStubs = { ...this.props };
    const tmpId = Math.floor(100000 + Math.random() * 900000);
    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this.lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id="__l_${tmpId}"></div>`;
    });

    const fragment = this._createDocumentElement("template");
    fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    Object.entries(this.lists).forEach(([, child]) => {
      const listCont = this._createDocumentElement("template");
      child.forEach((item) => {
        if (item instanceof Block) {
          listCont.content.append(item.getContent());
        }
      });
      const stub = fragment.content.querySelector(`[data-id="__l_${tmpId}"]`);

      if (stub) {
        stub.replaceWith(listCont.content);
      }
    });

    const newElement = fragment.content.firstElementChild as HTMLElement;
    if (this._element && newElement) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    this._addEvents();
    this.addAttributes();
  }

  protected render(): string {
    return "";
  }

  public getContent(): HTMLElement {
    if (!this._element) {
      throw new Error("Element is not created");
    }
    return this._element;
  }

  private _makePropsProxy<T extends object>(props: T): T {
    return new Proxy(props, {
      get: (target: T, prop: string) => {
        const value = target[prop as keyof T];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target: T, prop: string, value: T[keyof T]) => {
        const oldTarget = { ...target };

        target[prop as keyof T] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
    });
  }

  private _createDocumentElement(tagName: string): HTMLTemplateElement {
    return document.createElement(tagName) as HTMLTemplateElement;
  }

  public show(): void {
    const content = this.getContent();
    if (content) {
      content.style.display = "block";
      this.isShow = true;
    }
  }

  public hide(): void {
    const content = this.getContent();
    if (content) {
      content.style.display = "none";
      this.isShow = false;
    }
  }

  public onBlur(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.lists.Inputs.forEach((el) => {
      const childInput = el;
      if (childInput.getProps("name") === input.name) {
        console.log(`Blur ${input.name}:`, input.pattern, input.validity);
        if (!input.validity.valid) {
          console.log(`Blur ${input.name}:`, input.pattern, input.validity);
          console.log(`Error ${input.name}:`, input.validationMessage);
        }
        if (!VALIDATION_RULES[input.name].test(input.value)) {
          console.log(
            `Error ${input.name}: поле должно быть`,
            VALIDATION_ERRORS[input.name]
          );
        }
      }
    });
  }

  onSubmit(e: Event): Record<string, string> {
    e.preventDefault();
    const dataForm: Record<string, string> = {};
    this.lists.Inputs.forEach((el) => {
      const childInput = el;
      if (
        (childInput.getChildren("Input").getContent() as HTMLInputElement)
          .validity.valid
      ) {
        dataForm[childInput.getProps("name") as string] = (
          childInput.getChildren("Input").getContent() as HTMLInputElement
        ).value;
      }
    });

    return dataForm;
  }
}
