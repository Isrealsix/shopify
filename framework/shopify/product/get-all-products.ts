const fetchData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const data = await (await fetch(url)).json();
  return { data };
}

const getAllProducts = async (): Promise<any[]> => {
  const { data } = await fetchData();
  return data;
}

export default getAllProducts;