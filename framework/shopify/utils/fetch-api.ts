import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api";

const fetchData = async <T>({
  url,
  query,
  variables,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  const { data, errors } = await (
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  ).json();
  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }
  return { data };
};

export default fetchData;
