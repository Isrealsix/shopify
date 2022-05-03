import { IProduct } from "@common/types/products";
import Image from "next/image";
import Link from "next/link";
import style from "./ProductCard.module.css";

interface IProps {
  product: IProduct;
  variant?: "simple" | "slim";
}

const placeholderImage = "/product-image-placeholder.svg";
const ProductCard: React.FC<IProps> = ({ product, variant = "simple" }) => {
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <a className={style.root}>
        {variant === "slim" ? (
          <>
            <div className="inset-0 flex items-center justify-center absolute z-20">
              <span className="bg-black text-white p-3 font-bold text-xl">{product.name}</span>
            </div>
            {product.images && (
              <Image
                className={style.productImage}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality={85}
                layout="fixed"
                alt={product.name ?? "Product image"}
              />
            )}
          </>
        ) : (
          <>
            <div className={style.productBg}></div>
            <div className={style.productTag}>
              <h3 className={style.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={style.productPrice}>
                {product.price.value} {product.price.currencyCode}
              </span>
            </div>
            {product.images && (
              <Image
                className={style.productImage}
                src={product.images[0].url ?? placeholderImage}
                height={540}
                width={540}
                quality={85}
                layout="responsive"
                alt={product.name ?? "Product image"}
              />
            )}
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
