import axios from "axios";

const deleteData = async (id, setData) => {
  //const response = axios.delete(`http://localhost:8000/data/${id}`);
  console.log(id);
  setData((prevValue) => {
    console.log(prevValue);
    const newArr = [...prevValue].filter((element) => element.id !== id);
    console.log(newArr);
    return prevValue;
  });
};

export default deleteData;
