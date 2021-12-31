import React from "react";
import AddExpense from "../components/AddExpense";
import Overview from "../components/Overview";

const MainPage = () => {
  return (
    <React.Fragment>
      <Overview />
      <AddExpense />
    </React.Fragment>
  );
};

export default MainPage;
