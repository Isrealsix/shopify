import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchData from '../utils/fetch-api';
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchData<ReturnType>({ query: getAllProductsQuery });
  return data.products;
};

export default getAllProducts;
