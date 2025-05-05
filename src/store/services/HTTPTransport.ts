enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

type QueryParams = Record<string, string | number | boolean>;

interface RequestOptions<Q = QueryParams, D = XMLHttpRequestBodyInit> {
  method?: Methods;
  timeout?: number;
  headers?: Record<string, string>;
  data?: D;
  query?: Q;
  signal?: AbortSignal;
  credentials?: boolean;
}

type HTTPMethod = <R = unknown>(
  url: string,
  options?: Partial<RequestOptions<QueryParams>>
) => Promise<R | void>;

export class HTTPTransport {
  private createMethod(method: Methods): HTTPMethod {
    return (url, options = {}) => this.request(url, { ...options, method });
  }

  get = this.createMethod(Methods.GET);

  post = this.createMethod(Methods.POST);

  put = this.createMethod(Methods.PUT);

  delete = this.createMethod(Methods.DELETE);

  patch = this.createMethod(Methods.PATCH);

  private request<R>(
    url: string,
    options: RequestOptions<QueryParams>
  ): Promise<R | void> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const fullUrl = options.query
        ? `${url}?${new URLSearchParams(
            options.query as Record<string, string>
          ).toString()}`
        : url;

      xhr.open(options.method as string, fullUrl);

      if (options.credentials) {
        xhr.withCredentials = true;
      }

      if (options.headers) {
        Object.entries(options.headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            if (xhr.responseText === "OK") {
              resolve();
            }

            const response = JSON.parse(xhr.responseText);

            resolve(response);
          } catch (e) {
            reject(new Error("Failed to parse JSON response"));
          }
        } else {
          reject(new Error(`${xhr.responseText}`));
        }
      };

      xhr.onerror = () => {
        reject(new Error("Network error"));
      };

      xhr.ontimeout = () => {
        reject(new Error("Request timeout"));
      };

      if (options.timeout) {
        xhr.timeout = options.timeout;
      }

      xhr.send(options.data);
    });
  }
}
