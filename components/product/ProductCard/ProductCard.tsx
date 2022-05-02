import { IProduct } from "@common/types/products";

interface IProps {
  product: IProduct
}


const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div>
      {product.name}
    </div>
  )
}

export default ProductCard;