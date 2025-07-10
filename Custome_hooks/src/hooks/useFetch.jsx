import { useEffect, useState } from "react";

export function useFecth(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchData, setfetchData] = useState(initialValue);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setfetchData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return [isFetching, fetchData, setfetchData, error];
}
