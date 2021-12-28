import React from "react";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import buttonStyles from "../styles/button.module.css";
import { useNavigate } from "react-router-dom";

const Navinjo = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigator = useNavigate();

  return (
    <React.Fragment>
      {isLoggedIn && (
        <div className={styles.navbar}>
          <h3>
            Hello{" "}
            <span onClick={() => navigator("/")}>
              {isLoggedIn.email.substring(0, isLoggedIn.email.indexOf("@"))}
            </span>
          </h3>
          <button
            className={buttonStyles["button-34"]}
            onClick={() => navigator("/add-new-section")}
          >
            Add new section
          </button>
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
    </React.Fragment>
  );
};

export default Navinjo;
