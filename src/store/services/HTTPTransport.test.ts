import { HTTPTransport, Methods } from "./HTTPTransport";

describe("HTTPTransport", () => {
  let http: HTTPTransport;
  const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    withCredentials: false,
    timeout: 0,
    onload: jest.fn(),
    onerror: jest.fn(),
    ontimeout: jest.fn(),
    status: 200,
    responseText: '{"success": true}',
  };

  beforeEach(() => {
    http = new HTTPTransport();

    // Mock XMLHttpRequest
    global.XMLHttpRequest = jest.fn(() => mockXHR) as any;
    jest
      .spyOn(global, "XMLHttpRequest")
      .mockImplementation(() => mockXHR as any);

    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  describe("HTTP Methods", () => {
    test("should create GET method", () => {
      expect(http.get).toBeInstanceOf(Function);
    });

    test("should create POST method", () => {
      expect(http.post).toBeInstanceOf(Function);
    });

    test("should create PUT method", () => {
      expect(http.put).toBeInstanceOf(Function);
    });

    test("should create DELETE method", () => {
      expect(http.delete).toBeInstanceOf(Function);
    });

    test("should create PATCH method", () => {
      expect(http.patch).toBeInstanceOf(Function);
    });
  });

  describe("request method", () => {
    http = new HTTPTransport();
    test("should make a request with correct parameters", async () => {
      const promise = http.request("https://example.com", {
        method: Methods.GET,
        timeout: 5000,
        credentials: true,
      });

      // Simulate successful response
      mockXHR.onload();

      await promise;

      expect(mockXHR.open).toHaveBeenCalledWith("GET", "https://example.com");
      expect(mockXHR.timeout).toBe(5000);
      expect(mockXHR.withCredentials).toBe(true);
    });

    test("should handle query parameters", async () => {
      const promise = http.request("https://example.com", {
        method: Methods.GET,
        query: { param1: "value1", param2: 2 },
      });

      mockXHR.onload();
      await promise;

      expect(mockXHR.open).toHaveBeenCalledWith(
        "GET",
        "https://example.com?param1=value1&param2=2"
      );
    });

    test("should resolve with parsed JSON on success", async () => {
      mockXHR.responseText = '{"success": true}';
      const promise = http.request("https://example.com", {
        method: Methods.GET,
      });

      mockXHR.onload();
      const response = await promise;

      expect(response).toEqual({ success: true });
    });

    test('should resolve with void when response is "OK"', async () => {
      mockXHR.responseText = "OK";
      const promise = http.request("https://example.com", {
        method: Methods.GET,
      });

      mockXHR.onload();
      const response = await promise;

      expect(response).toBeUndefined();
    });

    test("should reject with error on network error", async () => {
      const promise = http.request("https://example.com", {
        method: Methods.GET,
      });

      mockXHR.onerror();
      await expect(promise).rejects.toThrow("Network error");
    });

    test("should reject with error on timeout", async () => {
      const promise = http.request("https://example.com", {
        method: Methods.GET,
        timeout: 1000,
      });

      mockXHR.ontimeout();
      await expect(promise).rejects.toThrow("Request timeout");
    });

    test("should reject with error on non-200 status", async () => {
      mockXHR.status = 404;
      mockXHR.responseText = "Not Found";
      const promise = http.request("https://example.com", {
        method: Methods.GET,
      });

      mockXHR.onload();
      await expect(promise).rejects.toThrow("Not Found");
    });
  });
});
