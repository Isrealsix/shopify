import { IProduct } from "@common/types/products";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  product: IProduct
}

const placeholderImage = '/product-image-placeholder.svg';
const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>18 $</span>
        </div>
        { 
          product.images && (
            <Image
              src={placeholderImage}
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