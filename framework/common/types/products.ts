export interface IProductImage {
  url: string;
  alr?: string
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: Array<IProductImage>
}