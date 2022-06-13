import { Layout } from "@components/common";
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
  const { product } = await getProduct(config);
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
    <div>
      {product.slug}
      {product.name}
    </div>
  );
};

export default ProductSlug;

ProductSlug.Layout = Layout;
