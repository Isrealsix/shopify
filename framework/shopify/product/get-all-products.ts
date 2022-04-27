import getAllProductsQuery from "../utils/queries/get-all-products";
const fetchData = async ({ query }: {query: string}) => {
  const url = "http://localhost:4000/graphql";
  const data = await (await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
    })
  })).json();
  return { data };
};

const getAllProducts = async (): Promise<any[]> => {
  const { data } = await fetchData({ query: getAllProductsQuery });
  return data;
};

export default getAllProducts;
