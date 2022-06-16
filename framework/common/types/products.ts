import { ProductVariant } from "./../../shopify/schema.d";
export interface IProductImage {
  url: string;
  alr?: string;
}

export interface IProductPrice {
  value: number;
  currencyCode: "USD" | "RUB" | string;
}

export interface IProductOptionValues {
  label: string;
  hexColor?: string;
}
export interface IProductOption {
  id: string;
  displayName: string;
  values: IProductOptionValues[];
}

export interface IProductVariant {
  id: string;
  name: string;
  options: IProductOption[];
}
export interface IProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: Array<IProductImage>;
  price: IProductPrice;
  options: IProductOption[];
  variants: IProductVariant[];
}
