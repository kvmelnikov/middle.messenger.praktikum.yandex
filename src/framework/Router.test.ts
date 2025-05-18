import Router, { Route } from "./Router";
import Block from "./Block";

// Enhanced Mock Block class
class MockBlock extends Block {
  render() {
    return "<div>Mock Block</div>";
  }
}

// Enhanced Mock History
class MockHistory {
  back = jest.fn();
  forward = jest.fn();
  pushState = jest.fn();
  replaceState = jest.fn();
  go = jest.fn(); // Add go function
  length = 0; // Add length property
  state: any = null; // Add state property
  scrollRestoration: ScrollRestoration = "auto"; // Add scrollRestoration property
}

// Enhanced Mock Window with TypeScript interface
interface MockWindow
  extends Omit<Window, "history" | "location" | "onpopstate"> {
  history: MockHistory;
  onpopstate: ((event: PopStateEvent) => void) | null;
  location: Location;
}

const mockWindow: MockWindow = {
  history: new MockHistory(),
  onpopstate: null,
  location: {
    pathname: "/",
    hash: "",
    search: "",
    hostname: "",
    href: "",
    origin: "",
    port: "",
    protocol: "",
    assign: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
  },
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  // Add other window properties as needed
} as any;

// Enhanced Mock Document
class MockTemplateElement {
  content: DocumentFragment;
  constructor() {
    this.content = {
      firstElementChild: null,
      querySelector: jest.fn(),
      append: jest.fn(),
      children: [] as unknown as HTMLCollection,
      // Add other DocumentFragment properties as needed
    } as unknown as DocumentFragment;
  }
}

const mockRoot = {
  innerHTML: "",
  appendChild: jest.fn(),
  replaceWith: jest.fn(),
  // Add other element properties as needed
};

const mockQuerySelector = jest.fn((selector: string) => {
  return selector === "#app" ? mockRoot : null;
});

const mockCreateElement = jest.fn((tagName: string) => {
  if (tagName === "template") {
    return new MockTemplateElement();
  }
  return {
    style: {},
    setAttribute: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    replaceWith: jest.fn(),
    appendChild: jest.fn(),
    // Add other HTMLElement properties as needed
  };
});

// Global mocks setup
beforeAll(() => {
  global.window = mockWindow as unknown as Window & typeof globalThis;
  global.document = {
    createElement: mockCreateElement,
    querySelector: mockQuerySelector,
    // Add other document methods as needed
  } as unknown as Document;
});

describe("Router", () => {
  let router: Router;
  const rootQuery = "#app";

  beforeEach(() => {
    // Reset the singleton instance and clear mocks
    (Router as any).__instance = undefined;
    router = new Router(rootQuery);
    jest.clearAllMocks();

    // Reset window location between tests
    mockWindow.location.pathname = "/";
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
      router.use("/test", MockBlock);
      router.start();
      expect(window.onpopstate).toBeDefined();
    });
  });

  describe("back()", () => {
    test("should call history.back()", () => {
      router.back();
      expect(window.history.back).toHaveBeenCalled();
    });
  });

  describe("forward()", () => {
    test("should call history.forward()", () => {
      router.forward();
      expect(window.history.forward).toHaveBeenCalled();
    });
  });
});

describe("Route", () => {
  const pathname = "/test";
  const rootQuery = "#app";
  let route: Route;

  beforeEach(() => {
    route = new Route(pathname, MockBlock, { rootQuery });
    jest.clearAllMocks();
  });

  test("navigate() should not render if not matched", () => {
    const renderSpy = jest.spyOn(route, "render");
    route.navigate("/other");
    expect(renderSpy).not.toHaveBeenCalled();
  });

  test("match() should compare pathnames", () => {
    expect(route.match("/test")).toBe(true);
    expect(route.match("/other")).toBe(false);
    expect(route.match("/test/extra")).toBe(false);
  });
});
