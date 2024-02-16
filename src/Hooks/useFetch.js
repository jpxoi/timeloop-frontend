import { useState, useEffect } from "react";

export function useFetch(url, method = 'GET', headers = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);

    fetch(url, {
      method: method,
      signal: abortController.signal,
      headers: headers
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name == "AbortError") {
          console.log("Cancelled Request");
        } else {
          console.log(error);
        }
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Cancelled Request");
    }
  };

  return { data, loading, error, handleCancelRequest };
}
