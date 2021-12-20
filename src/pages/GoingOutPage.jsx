import React from "react";
import { useState } from "react";
import GoBackButton from "../components/GoBackButton";
import updateData from "../Hooks/updateData";

const GoingOutPage = ({ data, setGoingOut }) => {
  const { id, type, value, details } = data;
  const [arrayOfExpenses, setArrayOfExpenses] = useState(details);

  const handleClick = (expenseName) => {
    setArrayOfExpenses((arrayOfExpenses) =>
      arrayOfExpenses.filter((element) => element.name !== expenseName)
    );
    let newElement = arrayOfExpenses.filter(
      (element) => element.name !== expenseName
    );
    updateData(id, { ...data, details: newElement });
    setGoingOut({ ...data, details: newElement });
  };

  return (
    <div>
      <h2>Header</h2>
      <h2>Sum Value: {Number(value).toFixed(2)}</h2>
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

export default GoingOutPage;
