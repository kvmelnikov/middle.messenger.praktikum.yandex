/**
 * @jest-environment jsdom
 */

import Router, { Route } from "./Router";
import Block from "./Block";

// Mock Block class
class MockBlock extends Block {
  render() {
    return "<div>Mock Block</div>";
  }
}

// Mock DOM environment
beforeEach(() => {
  document.body.innerHTML = '<div id="app"></div>';
});

describe("Router", () => {
  let router: Router;
  const rootQuery = "#app";

  beforeEach(() => {
    // Clear instance before each test
    (Router as any).__instance = undefined;
    router = new Router(rootQuery);
  });

  test("should be a singleton", () => {
    const router2 = new Router(rootQuery);
    expect(router).toBe(router2);
  });

  describe("use()", () => {
    test("should return router instance for chaining", () => {
      const result = router.use("/test", MockBlock);
      expect(result).toBe(router);
    });
  });

  describe("start()", () => {
    test("should set up popstate listener", () => {
      const addEventListenerSpy = jest.spyOn(window, "onpopstate", "set");
      router.use("/test", MockBlock);
      router.start();
      expect(addEventListenerSpy).toHaveBeenCalled();
    });
  });

  describe("back()", () => {
    test("should call history.back()", () => {
      const backSpy = jest.spyOn(window.history, "back");
      router.back();
      expect(backSpy).toHaveBeenCalled();
    });
  });

  describe("forward()", () => {
    test("should call history.forward()", () => {
      const forwardSpy = jest.spyOn(window.history, "forward");
      router.forward();
      expect(forwardSpy).toHaveBeenCalled();
    });
  });
});

describe("Route", () => {
  const pathname = "/test";
  const rootQuery = "#app";
  let route: Route;

  beforeEach(() => {
    route = new Route(pathname, MockBlock, { rootQuery });
  });

  test("navigate() should not render if not matched", () => {
    const mockRender = jest.fn();
    route.render = mockRender;
    route.navigate("/other");
    expect(mockRender).not.toHaveBeenCalled();
  });

  test("match() should compare pathnames", () => {
    expect(route.match("/test")).toBe(true);
    expect(route.match("/other")).toBe(false);
  });
});
