import { normalizeProduct } from './../utils/normalize';
import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchData from '../utils/fetch-api';
import { ProductConnection } from "../schema";
import { IProduct } from './../../common/types/products';


type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<Array<IProduct>> => {
  const { data }  = await fetchData<ReturnType>({ query: getAllProductsQuery });
  const products = data.products.edges.map(({ node }) => normalizeProduct(node)) ?? [];
  return products;
};

export default getAllProducts;
