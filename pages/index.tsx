import { InferGetStaticPropsType } from "next";

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>{ products }</div>
  )
}

export async function getStaticProps() {
  const products = [5,6,7];
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}