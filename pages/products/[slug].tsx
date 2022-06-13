import { Layout } from "@components/common";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

// get products slugs
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "cool-hat" } },
      { params: { slug: "t-shirt" } },
      { params: { slug: "lightwight-jacket" } },
    ],
    fallback: false,
  };
};

// specific data to page
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  };
};

const ProductSlug = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{product.slug}</div>;
};

export default ProductSlug;

ProductSlug.Layout = Layout;
