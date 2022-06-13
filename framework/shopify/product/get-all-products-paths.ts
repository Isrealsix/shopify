import { IApiConfig } from "@common/types/api";
import { IProduct } from "@common/types/products";
import { ProductConnection } from "@framework/schema";
import getAllProductPathsQuery from "@framework/utils/queries/get-all-products-paths";

type ReturnType = {
  products: Pick<IProduct, "slug">[];
};

const getAllProductsPaths = async (config: IApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductPathsQuery,
    url: config.apiUrl,
  });
  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });
  return { products };
};

export default getAllProductsPaths;
