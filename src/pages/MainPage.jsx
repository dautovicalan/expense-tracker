import React from "react";
import AddExpense from "../components/AddExpense";
import Overview from "../components/Overview";
import { useState, useEffect } from "react";
import updateData from "../Hooks/updateData";
import ExpenseChart from "../components/ExpenseChart";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const MainPage = () => {
  // TODO Add expense fix, with useContext, handleSubmit fix
  return (
    <React.Fragment>
      <Overview />
      {/* <Overview />
      <ExpenseChart />
      <AddExpense /> */}
      <AddExpense/>
    </React.Fragment>
  );
};

export default MainPage;
