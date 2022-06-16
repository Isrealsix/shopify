import cn from "classnames";
import { FC } from "react";
import style from "./ProductView.module.css";
import { Container } from "@components/ui";
import Image from "next/image";
import { IProduct } from "@common/types/products";

interface Props {
  product: IProduct;
}

const ProductView: FC<Props> = ({ product }) => {
  return (
    <Container>
      <div className={cn(style.root, "fit")}>
        <div className={cn(style.productDisplay, "fit")}>
          <div className={style.nameBox}>
            <h1 className={style.name}>Product Name</h1>
            <div className={style.price}>
              50
              {` `}$
            </div>
          </div>
          <div className={style.imageContainer}>
            <Image
              className={style.img}
              src={"/product-image-placeholder.svg"}
              alt={"Product Image"}
              width={1050}
              height={1050}
              quality="85"
            />
          </div>
        </div>
        <div className={style.sidebar}>
          <section>
            <div className="pb-4">
              <h2 className="uppercase font-medium">Color</h2>
              <div className="flex flex-row py-4">Variant Options Here!</div>
            </div>
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              Product description...
            </div>
          </section>
          <div>
            <button
              onClick={() => {}}
              aria-label="Add to Cart"
              className={style.button}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
