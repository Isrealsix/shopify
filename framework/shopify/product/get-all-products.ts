const fetchData = async () => {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();
  return { data };
};

const getAllProducts = async (): Promise<any[]> => {
  const { data } = await fetchData();
  return data;
};

export default getAllProducts;
