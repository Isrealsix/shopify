import { IApiConfig } from "@common/types/api";

const getProduct = async (config: IApiConfig): Promise<any> => {
  return {
    product: {
      name: "our super product",
      slug: "our-super-product",
    },
  };
};

export default getProduct;
