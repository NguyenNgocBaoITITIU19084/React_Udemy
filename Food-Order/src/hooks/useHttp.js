import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const responseData = await fetch(url, config);

  const data = await responseData.json();

  if (!responseData.ok) {
    throw new Error(data.message || "There is error when sending the message");
  }

  return data;
}

export default function useHttp(url, config, initialValue) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchData, setFetchData] = useState(initialValue);
  const [error, setError] = useState();

  function clearData() {
    setFetchData(initialValue);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, {
          ...config,
          body: data,
        });
        setFetchData(resData);
      } catch (error) {
        setError(error.message || "There is error when sending the request.");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    isLoading,
    fetchData,
    error,
    sendRequest,
    clearData,
  };
}
