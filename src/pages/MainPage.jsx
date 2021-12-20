import React from "react";
import AddExpense from "../components/AddExpense";
import Overview from "../components/Overview";
import { useState, useEffect } from "react";
import updateData from "../Hooks/updateData";
import ExpenseChart from "../components/ExpenseChart";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const dajfood = (details) => {
  let test = 0;
  details.map((element) => {
    test += element.value;
  });
  return test;
};

const MainPage = () => {
  const { data } = useContext(DataContext);
  console.log(data);

  return (
    <React.Fragment>
      <Overview/>
      {/* <Overview />
      <ExpenseChart />
      <AddExpense /> */}
    </React.Fragment>
  );
};

export default MainPage;
