import React from "react";
import { useState } from "react";
import AddExpense from "../components/AddExpense";
import GoBackButton from "../components/GoBackButton";
import updateData from "../Hooks/updateData";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const dajfood = (details) => {
  let test = 0;
  details.map((element) => {
    test += element.value;
  });
  return test;
};

const FoodPage = ({ data, setFood }) => {
  const { id, type, value, details } = data;
  const [arrayOfExpenses, setArrayOfExpenses] = useState(details);

  const foodValue = dajfood(data.details);

  const textContext = useContext(DataContext);
  console.log(textContext);

  const handleClick = (expenseName) => {
    setArrayOfExpenses((arrayOfExpenses) =>
      arrayOfExpenses.filter((element) => element.name !== expenseName)
    );
    let newElement = arrayOfExpenses.filter(
      (element) => element.name !== expenseName
    );
    updateData(id, { ...data, details: newElement });
    setFood({ ...data, details: newElement });
  };

  return (
    <div>
      <h2>Header</h2>
      <h2>Sum Value: {Number(foodValue).toFixed(2)}</h2>
      {arrayOfExpenses.map((element, index) => {
        return (
          <div
            className="single-element"
            style={{ backgroundColor: "green", textAlign: "center" }}
            key={index}
          >
            <h2>Name: {element.name}</h2>
            <h2>Price: {element.value} kn</h2>
            <button onClick={() => handleClick(element.name)}>Remove</button>
          </div>
        );
      })}
      <GoBackButton />
    </div>
  );
};

export default FoodPage;
