import React from "react";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import moneyStyle from "../styles/MoneyStatus.module.css";

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
    <React.Fragment>
      {data && (
        <div style={{ fontFamily: "Oswald, sans-serif" }}>
          <h2>
            You earned{" "}
            <span>
              {currentCurrency === "KN"
                ? finalIncomeValue
                : (finalIncomeValue / 7.5).toFixed(2)}{" "}
              {currentCurrency}
            </span>{" "}
            this month
          </h2>
          <h2>
            You spent{" "}
            <span>
              {currentCurrency === "KN"
                ? finalCostValue
                : (finalCostValue / 7.5).toFixed(2)}{" "}
              {currentCurrency}
            </span>{" "}
            this month
          </h2>
          <h2>
            Now your current money status eqauls{" "}
            <span
              className={
                finalIncomeValue - finalCostValue >= 0
                  ? moneyStyle.positive
                  : moneyStyle.negative
              }
            >
              {currentCurrency === "KN"
                ? (finalIncomeValue - finalCostValue).toFixed(2)
                : ((finalIncomeValue - finalCostValue) / 7.5).toFixed(2)}{" "}
              {currentCurrency}
            </span>
          </h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShowMoneyStatusPage;
