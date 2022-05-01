import { normalizeProduct, getAllProductsQuery } from '../utils';
import { ProductConnection } from "../schema";
import { IProduct } from '@common/types/products';
import { IApiConfig } from '@common/types/api';


type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (config: IApiConfig): Promise<Array<IProduct>> => {
  const { data }  = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery
  });
  const products = data.products.edges.map(({ node }) => normalizeProduct(node)) ?? [];
  return products;
};

export default getAllProducts;
