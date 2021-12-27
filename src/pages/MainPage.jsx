import React from "react";
import AddExpense from "../components/AddExpense";
import Overview from "../components/Overview";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import buttonStyles from "../styles/button.module.css";

const MainPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(DataContext);
  console.log(isLoggedIn);

  return (
    <React.Fragment>
      {isLoggedIn && (
        <div className={styles.navbar}>
          <h3>
            Hello{" "}
            <span>
              {isLoggedIn.email.substring(0, isLoggedIn.email.indexOf("@"))}
            </span>
          </h3>
          <button
            onClick={() => {
              setIsLoggedIn(null);
              localStorage.removeItem("currentUser");
            }}
            className={buttonStyles["button-34"]}
          >
            Loggout
          </button>
        </div>
      )}
      <Overview />
      <AddExpense />
    </React.Fragment>
  );
};

export default MainPage;
