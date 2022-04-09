import { InferGetStaticPropsType } from "next";
import getAllProducts from "../framework/shopify/product/get-all-products";
export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>{ products }</div>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}