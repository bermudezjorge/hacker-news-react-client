import { useSWRInfinite } from "swr";
import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function useNews(tech) {
  const { data, error, setSize } = useSWRInfinite(
    (index) =>
      `https://hn.algolia.com/api/v1/search_by_date?query=${tech}&page=${
        index + 1
      }`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    setSize: setSize,
  };
}
