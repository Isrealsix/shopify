type fetchedData<T> = { data: T };

const fetchData = async <T>({
  query,
}: {
  query: string;
}): Promise<fetchedData<T>> => {
  const url = "http://localhost:4000/graphql";
  const { data, errors } = await (
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
  ).json();
  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }
  return { data };
};

export default fetchData;
