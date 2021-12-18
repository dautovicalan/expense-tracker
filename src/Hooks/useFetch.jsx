import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/data");
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetch;
