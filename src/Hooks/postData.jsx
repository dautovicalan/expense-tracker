import axios from "axios";

const postData = async (data) => {
  const response = await axios.post(`http://localhost:8000/data`, data);
  console.log(response);
};

export default postData;
