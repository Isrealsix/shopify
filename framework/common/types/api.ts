export type ApiFetcherOptions = {
  url: string;
  query: string;
  variables?: Variables;
};

export type Variables = { [key: string]: string };

export type ApiFetcherResults<T> = {
  data: T;
};

export interface IApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>;
}
