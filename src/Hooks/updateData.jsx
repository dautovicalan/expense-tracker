import axios from "axios";

const updateData = async (id, data) => {
  const res = await axios.put(`http://localhost:8000/data/${id}`, data);
  console.log(res);
};

export default updateData;
