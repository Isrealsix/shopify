export interface IProductImage {
  url: string;
  alr?: string
}

export interface IProductPrice {
  value: number;
  CurrencyCode: 'USD' | 'RUB' | string;
}
export interface IProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: Array<IProductImage>;
  price: IProductPrice
}