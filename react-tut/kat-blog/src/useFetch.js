import { useState, useEffect } from "react";

// cutomer Hook in react  must alaways start with use..else it wont work
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // not store useEffect() to const cos it does not return anything but just pass as argument function
  // this fuction fires in every render
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 10);

    return () => abortCont.abort();
  }, [url]);
  // [] dependency array makes sure useEffect() runs the function once after the initail render
  // [url] ensures useEffect() runs the function again when name changes

  return { data, isPending, error };
};

export default useFetch;
