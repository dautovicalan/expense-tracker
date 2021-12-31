import axios from "axios";

const postData = async (data) => {
  const response = await axios.post(`http://localhost:8000/data`, data);
  return response.data;
};

export default postData;
