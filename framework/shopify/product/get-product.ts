import { IApiConfig, Variables } from "@common/types/api";
import { getProductQuery } from "@framework/utils";
import { Product as ShopifyProduct } from "@framework/schema";

type FetchType = {
  productByHandle: ShopifyProduct;
};

const getProduct = async (options: {
  config: IApiConfig;
  variables: Variables;
}): Promise<any> => {
  const { config, variables } = options;
  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });
  console.log(JSON.stringify(data, null, 2));
  return {
    product: {
      name: "our super product",
      slug: "our-super-product",
    },
  };
};

export default getProduct;
