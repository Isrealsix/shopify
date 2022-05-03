import { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero } from "@components/ui";


export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
          )}
        </Grid>
        <Hero 
          headline="Hello Headline"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos magnam impedit atque distinctio nemo quibusdam quisquam quam, aut, iure odit suscipit fuga eligendi praesentium mollitia rerum id eius ducimus commodi tempore nulla in? Voluptates blanditiis aspernatur placeat cum beatae natus porro voluptatibus amet aut est tempora nemo tempore aperiam autem quam illum magnam adipisci, impedit quibusdam eos deserunt expedita. Sit sequi magnam in ipsum sed tempora nesciunt aliquam soluta, a illum atque? Perspiciatis vitae, voluptatem beatae quam dolorem aperiam harum rerum illo velit laborum ullam doloremque, consequuntur natus eligendi sit. Ab veniam praesentium maxime adipisci quo, ea rem officia dolorum quasi necessitatibus doloremque, rerum id facilis deleniti, nisi veritatis atque. Quas explicabo recusandae sapiente inventore laudantium temporibus illum a modi?"
        />
    </>
  )
}

Home.Layout = Layout;

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}