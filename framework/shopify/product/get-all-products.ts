import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchData from '../utils/fetch-api';

const getAllProducts = async (): Promise<any[]> => {
  const { data } = await fetchData({ query: getAllProductsQuery });
  return data;
};

export default getAllProducts;
