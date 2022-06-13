import { IApiConfig } from "@common/types/api";
import { IProduct } from "@common/types/products";

type ReturnType = {
  products: Pick<IProduct, "slug">[];
};

const getAllProductsPaths = async (config: IApiConfig): Promise<ReturnType> => {
  return {
    products: [
      { slug: "cool-hat" },
      { slug: "t-shirt" },
      { slug: "lightweight-jacket" },
    ],
  };
};

export default getAllProductsPaths;
