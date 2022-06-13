import { IApiConfig } from "@common/types/api";
import { getProductQuery } from "@framework/utils";

const getProduct = async (config: IApiConfig): Promise<any> => {
  const { data } = await config.fetch<any>({
    query: getProductQuery,
    url: config.apiUrl,
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
