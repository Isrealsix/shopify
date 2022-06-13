import { MoneyV2, CurrencyCode, ProductOption } from "./../schema.d";
import { ImageEdge, Product as ShopifyProduct } from "@framework/schema";
import { IProduct } from "@common/types/products";

const normalizeImage = ({ edges }: { edges: Array<ImageEdge> }) => {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));
};

const normalizeProductOption = ({
  id,
  values,
  name: displayName,
}: ProductOption) => {
  const normalized = {
    id,
    displayName,
    values: values.map((value) => {
      let output: any = {
        label: value,
      };

      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value,
        };
      }

      return output;
    }),
  };

  return normalized;
};

const normalizeProductPrice = ({ amount, currencyCode }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};

export const normalizeProduct = (productNode: ShopifyProduct): IProduct => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
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
    options: options
      ? options
          .filter((opt) => opt.name !== "Title")
          .map((opt) => normalizeProductOption(opt))
      : [],
    ...rest,
  };
  return product;
};
