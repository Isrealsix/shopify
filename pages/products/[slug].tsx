import { Layout } from "@components/common";
import { Container } from "@components/ui";
import { getConfig } from "@framework/api/config";
import { getAllProductsPaths, getProduct } from "@framework/product";

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

// get products slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

// specific data to page
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct({
    config,
    variables: { slug: params?.slug },
  });
  return {
    props: {
      product,
    },
  };
};

const ProductSlug = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <p>id: {product.id}</p>
      <p>name: {product.name}</p>
      <p>price value: {product.price.value}</p>
      <p>price currency code: {product.price.currencyCode}</p>
      <p>description: {product.description}</p>

      <h1 className="mb-4">OPTIONS</h1>
      <div>
        {product?.options.map((option) => (
          <div key={option.id}>
            <p>Name: {option.displayName}</p>
            {option.values.map((value) => (
              <div key={value.label}>
                <p>Label: {value.label}</p>
                <p>Hex color: {value.hexColor}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h1 className="mb-4">VARIANTS</h1>
      <div>
        {product?.variants.map((variant) => (
          <div key={variant.id}>
            <p>Variant Name: {variant.name}</p>
            {variant.options.map((variantOption) => (
              <div key={variantOption.id}>
                <p>Name {variantOption.displayName}</p>
                {variantOption?.values.map((value, idx) => (
                  <div key={idx}>
                    <p>Label: {value.label}</p>
                    <p>Hex color: {value.hexColor}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductSlug;

ProductSlug.Layout = Layout;
