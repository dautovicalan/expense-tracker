import React from "react";
import AddExpense from "../components/AddExpense";
import Overview from "../components/Overview";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const MainPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(DataContext);
  console.log(isLoggedIn);

  return (
    <React.Fragment>
      <div>
        <h1>Hello {isLoggedIn.email}</h1>
        <button
          onClick={() => {
            setIsLoggedIn(null);
            localStorage.removeItem("currentUser");
          }}
        >
          Loggout
        </button>
      </div>
      <Overview />
      {/*<ExpenseChart />*/}
      <AddExpense />
    </React.Fragment>
  );
};

export default MainPage;
