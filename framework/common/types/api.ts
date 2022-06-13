export type ApiFetcherOptions = {
  url: string;
  query: string;
  variables?: any;
};

export type ApiFetcherResults<T> = {
  data: T;
};

export interface IApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>;
}
