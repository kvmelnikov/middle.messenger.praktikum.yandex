import Block from "./Block";

describe("Block", () => {
  let block: Block;
  const initialProps = { testProp: "initial" };

  // Мокаем HTMLElement и связанные объекты
  class MockHTMLElement {
    style: Record<string, string> = {};
    addEventListener = jest.fn();
    removeEventListener = jest.fn();
    dispatchEvent = jest.fn();
    querySelector = jest.fn();
    querySelectorAll = jest.fn();
    innerHTML = "";
    setAttribute = jest.fn();
    replaceWith = jest.fn();
    append = jest.fn();
    firstElementChild: MockHTMLElement | null = null;
  }

  class MockTemplateElement extends MockHTMLElement {
    content: { firstElementChild: MockHTMLElement | null } = {
      firstElementChild: null,
    };
  }

  beforeAll(() => {
    // Мокаем document.createElement
    global.document = {
      createElement: jest.fn((tagName: string) => {
        if (tagName === "template") {
          const template = new MockTemplateElement();
          template.content.firstElementChild = new MockHTMLElement();
          return template;
        }
        return new MockHTMLElement();
      }),
    } as any;

    // Мокаем Handlebars.compile
    jest.mock("handlebars", () => ({
      compile: jest.fn(() => jest.fn(() => "<div>Test</div>")),
    }));
  });

  beforeEach(() => {
    // Создаем тестовый блок с простым рендером
    block = new (class extends Block {
      render() {
        return "<div>Test</div>";
      }
    })(initialProps);
  });

  describe("Public Methods", () => {
    test("setEvent adds event to eventBus", () => {
      const mockCallback = jest.fn();
      block.setEvent("testEvent", mockCallback);
      expect(() => block.setEvent("testEvent", mockCallback)).not.toThrow();
    });

    test("setProps updates component props", () => {
      const newProps = { newProp: "value" };
      block.setProps(newProps);

      expect(block.getProps("newProp")).toBe("value");
      expect(block.getProps("testProp")).toBe("initial");
    });

    test("getProps returns correct prop value", () => {
      expect(block.getProps("testProp")).toBe("initial");
      expect(block.getProps("nonExistent")).toBeUndefined();
    });

    test("getContent returns HTMLElement", () => {
      const content = block.getContent();
      expect(content).toBeInstanceOf(MockHTMLElement);
    });

    test("dispatchComponentDidMount triggers lifecycle", () => {
      const mockCallback = jest.fn();
      block.setEvent(Block.EVENTS.FLOW_CDM, mockCallback);

      block.dispatchComponentDidMount();
      expect(mockCallback).toHaveBeenCalled();
    });

    test("render creates element and sets it", () => {
      // Принудительно вызываем рендер
      (block as any)._render();

      expect(block.element).toBeDefined();
      expect(document.createElement).toHaveBeenCalledWith("template");
    });
  });
});
