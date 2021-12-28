import axios from "axios";

const deleteData = async (id, setData) => {
  const response = axios.delete(`http://localhost:8000/data/${id}`);
  setData((prevValue) => [...prevValue].filter((element) => element.id != id));
};

export default deleteData;
