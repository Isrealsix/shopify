import { ImageEdge, Product as ShopifyProduct } from "../schema";

const normalizeImage = ({ edges }: { edges: Array<ImageEdge> }) => {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `images/${url}`,
  }));
};

export const normalizeProduct = (productNode: ShopifyProduct): any => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
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
  };
  return product;
};
