/**
 * @jest-environment jsdom
 */
import Block from "./Block";

describe("Block", () => {
  let block: Block;
  const initialProps = { testProp: "initial" };

  beforeEach(() => {
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
      expect(content).toBeInstanceOf(HTMLElement);
    });

    test("dispatchComponentDidMount triggers lifecycle", () => {
      const mockCallback = jest.fn();
      block.setEvent(Block.EVENTS.FLOW_CDM, mockCallback);

      block.dispatchComponentDidMount();
      expect(mockCallback).toHaveBeenCalled();
    });

    test("show/hide toggles display style", () => {
      const content = block.getContent();

      block.hide();
      expect(content.style.display).toBe("none");
      expect(block.isShow).toBe(false);

      block.show();
      expect(content.style.display).toBe("block");
      expect(block.isShow).toBe(true);
    });
  });
});
