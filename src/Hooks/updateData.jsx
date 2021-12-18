import React from "react";
import axios from "axios";

const updateData = async (id, data) => {
  const res = await axios.put(`http://localhost:8000/data/${id}`, data);
};

export default updateData;
