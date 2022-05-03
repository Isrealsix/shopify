import { MoneyV2 } from './../schema.d';
import { ImageEdge, Product as ShopifyProduct } from "../schema";
import { IProduct } from '@common/types/products';

const normalizeImage = ({ edges }: { edges: Array<ImageEdge> }) => {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest
  }));
};

const normalizeProductPrice = ({ amount, currencyCode }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode
  }
}

export const normalizeProduct = (productNode: ShopifyProduct): IProduct => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    images: normalizeImage(imageConnection),
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest
  };
  return product;
};
