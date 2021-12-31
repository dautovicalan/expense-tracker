import React from "react";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const reducer = (prevValue, currentValue) => {
  return prevValue + currentValue.value;
};

const ShowMoneyStatusPage = () => {
  const { data, currentCurrency } = useContext(DataContext);

  const userIncome = data.find((element) => element.type === "Income");
  const otherCosts = data.filter((element) => element.type !== "Income");
  const costsArray = otherCosts.map((element) => {
    return element.details;
  });
  const finaleee = costsArray.flat(1);
  const finalIncomeValue = userIncome.details.reduce(reducer, 0).toFixed(2);
  const finalCostValue = finaleee.reduce(reducer, 0).toFixed(2);

  return (
    <div style={{ fontFamily: "Oswald, sans-serif" }}>
      <h2>
        You earned{" "}
        <span>
          {finalIncomeValue} {currentCurrency}
        </span>{" "}
        this month
      </h2>
      <h2>
        You spent{" "}
        <span>
          {finalCostValue} {currentCurrency}
        </span>{" "}
        this month
      </h2>
      <h2>
        Now your current money status eqauls{" "}
        <span>
          {finalIncomeValue - finalCostValue} {currentCurrency}
        </span>
      </h2>
    </div>
  );
};

export default ShowMoneyStatusPage;
