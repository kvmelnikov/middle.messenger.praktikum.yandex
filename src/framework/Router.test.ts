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
    test("should add route", () => {
      router.use("/test", MockBlock);
      expect(router.routes).toHaveLength(1);
    });

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

    test("should call _onRoute with current pathname", () => {
      const mockOnRoute = jest.fn();
      router._onRoute = mockOnRoute;
      router.start();
      expect(mockOnRoute).toHaveBeenCalledWith(window.location.pathname);
    });
  });

  describe("go()", () => {
    test("should change history and call _onRoute", () => {
      const pushStateSpy = jest.spyOn(window.history, "pushState");
      const mockOnRoute = jest.fn();
      router._onRoute = mockOnRoute;

      router.go("/test");
      expect(pushStateSpy).toHaveBeenCalledWith({}, "", "/test");
      expect(mockOnRoute).toHaveBeenCalledWith("/test");
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

  describe("_onRoute()", () => {
    test("should render matching route", () => {
      const mockRender = jest.fn();
      const mockRoute = {
        match: jest.fn().mockReturnValue(true),
        render: mockRender,
        leave: jest.fn(),
      };
      router.routes = [mockRoute as unknown as Route];
      router._onRoute("/test");
      expect(mockRender).toHaveBeenCalled();
    });

    test("should do nothing when no matching route found", () => {
      const mockRender = jest.fn();
      const mockRoute = {
        match: jest.fn().mockReturnValue(false),
        render: mockRender,
        leave: jest.fn(),
      };
      router.routes = [mockRoute as unknown as Route];
      router._onRoute("/nonexistent");
      expect(mockRender).not.toHaveBeenCalled();
    });
  });

  describe("getRoute()", () => {
    test("should return matching route", () => {
      const mockRoute = {
        match: jest.fn().mockReturnValue(true),
      };
      router.routes = [mockRoute as unknown as Route];
      const result = router.getRoute("/test");
      expect(result).toBe(mockRoute);
    });

    test("should return undefined when no match found", () => {
      const mockRoute = {
        match: jest.fn().mockReturnValue(false),
      };
      router.routes = [mockRoute as unknown as Route];
      const result = router.getRoute("/nonexistent");
      expect(result).toBeUndefined();
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

  test("navigate() should update pathname and render if matched", () => {
    const mockRender = jest.fn();
    route.render = mockRender;
    route.navigate("/test");
    expect(route._pathname).toBe("/test");
    expect(mockRender).toHaveBeenCalled();
  });

  test("navigate() should not render if not matched", () => {
    const mockRender = jest.fn();
    route.render = mockRender;
    route.navigate("/other");
    expect(mockRender).not.toHaveBeenCalled();
  });

  test("leave() should hide and clear block", () => {
    const mockHide = jest.fn();
    route._block = { hide: mockHide } as unknown as Block;
    route.leave();
    expect(mockHide).toHaveBeenCalled();
    expect(route._block).toBeNull();
  });

  test("leave() should do nothing when no block", () => {
    route._block = null;
    expect(() => route.leave()).not.toThrow();
  });

  test("match() should compare pathnames", () => {
    expect(route.match("/test")).toBe(true);
    expect(route.match("/other")).toBe(false);
  });
});
