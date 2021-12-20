import React from "react";
import AddExpense from "../components/AddExpense";
import Overview from "../components/Overview";
import { useState, useEffect } from "react";
import updateData from "../Hooks/updateData";
import ExpenseChart from "../components/ExpenseChart";

const dajfood = (details) => {
  let test = 0;
  details.map((element) => {
    test += element.value;
  });
  return test;
};

const MainPage = ({ data }) => {
  const [income, setIncome] = useState(data[0]);
  const [food, setFood] = useState(data[1]);
  const [goingOut, setGoingOut] = useState(data[2]);
  const [other, setOther] = useState(data[3]);

  // !Fix the calculate function error.
  // TODO Pass values as props to other funcionts. And pass them to the Chart
  const foodValue = dajfood(food.details);
  const goingOutValue = dajfood(goingOut.details);
  const otherValue = dajfood(other.details);

  const handleSubmit = (e, expenseName, expenseType, expenseMoney) => {
    e.preventDefault();
    const money = expenseMoney;
    switch (expenseType.current.value) {
      case "food":
        let newFood = food.value + money;
        let newDetails = food.details;
        newDetails.push({
          name: expenseName.current.value,
          value: expenseMoney,
        });
        let foodimier = {
          ...food,
          value: newFood,
          details: newDetails,
        };
        setFood((food) => ({ ...food, value: newFood }));
        updateData(foodimier.id, foodimier);
        break;
      case "going Out":
        let newGoingOut = goingOut.value + money;
        let newDetailsGoingOut = goingOut.details;
        newDetailsGoingOut.push({
          name: expenseName.current.value,
          value: expenseMoney,
        });
        let ajvanka = {
          ...goingOut,
          value: newGoingOut,
          details: newDetailsGoingOut,
        };
        setGoingOut((goingOut) => ({ ...goingOut, value: newGoingOut }));
        updateData(ajvanka.id, ajvanka);
        break;
      case "other":
        let newOther = other.value + money;
        let newDetailsOther = other.details;
        newDetailsOther.push({
          name: expenseName.current.value,
          value: expenseMoney,
        });
        let dajOther = { ...other, value: newOther, details: newDetailsOther };
        updateData(dajOther.id, dajOther);
        setOther((other) => ({ ...other, value: newOther }));
        break;
      default:
        alert("Something went wrong");
        break;
    }
  };
  return (
    <React.Fragment>
      {income && food && goingOut && other && (
        <Overview
          income={income}
          food={food}
          goingOut={goingOut}
          other={other}
        />
      )}
      {food && goingOut && other && (
        <ExpenseChart
          food={food.value}
          goingOut={goingOut.value}
          other={other.value}
        />
      )}
      <AddExpense handleSubmit={handleSubmit} />
    </React.Fragment>
  );
};

export default MainPage;
