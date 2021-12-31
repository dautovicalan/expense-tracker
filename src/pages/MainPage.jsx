import React from "react";
import AddExpense from "../components/AddExpense";
import Overview from "../components/Overview";

const MainPage = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "rgb(15, 17, 16)" }}>
        <Overview />
        <AddExpense />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
