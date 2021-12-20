import React from "react";
import { useState } from "react";
import updateData from "../Hooks/updateData";
import GoBackButton from "../components/GoBackButton";

const dajfood = (details) => {
  let test = 0;
  details.map((element) => {
    test += element.value;
  });
  return test;
};

const OtherPage = ({ data, setOther }) => {
  const { id, type, value, details } = data;
  const [arrayOfExpenses, setArrayOfExpenses] = useState(details);

  const otherValue = dajfood(data.details);

  const handleClick = (expenseName) => {
    setArrayOfExpenses((arrayOfExpenses) =>
      arrayOfExpenses.filter((element) => element.name !== expenseName)
    );
    let newElement = arrayOfExpenses.filter(
      (element) => element.name !== expenseName
    );
    updateData(id, { ...data, details: newElement });
    setOther({ ...data, details: newElement });
  };

  return (
    <div>
      <h2>Header</h2>
      <h2>Sum Value: {Number(otherValue).toFixed(2)}</h2>
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

export default OtherPage;
