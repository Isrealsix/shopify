import { IProduct } from "@common/types/products";
import Image from "next/image";
import Link from "next/link";
import style from "./ProductCard.module.css";

interface IProps {
  product: IProduct
}

const placeholderImage = '/product-image-placeholder.svg';
const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <a className={style.root}>
        <div className={style.productBg}></div>
        <div className={style.productTag}>
          <h3 className={style.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={style.productPrice}>
            {product.price.value} {product.price.CurrencyCode}
          </span>
        </div>
        { 
          product.images && (
            <Image
              className={style.productImage}
              src={product.images[0].url ?? placeholderImage}
              height={540}
              width={540}
              quality={85}
              layout="responsive"
              alt={product.name ?? "Product image"}
            />
          )
        }
      </a>
    </Link>
  )
}

export default ProductCard;