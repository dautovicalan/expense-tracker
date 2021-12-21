import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (resource) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8000/${resource}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setData(null);
        console.log(error.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, [resource]);

  return {data, isLoading};
};

export default useFetch;
