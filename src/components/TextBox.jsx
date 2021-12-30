import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Overview.module.css";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const reducer = (prevValue, currentValue) => {
  return prevValue + currentValue.value;
};

const TextBox = ({ name, id, details }) => {
  const navigate = useNavigate();
  const { currentCurrency } = useContext(DataContext);
  return (
    <React.Fragment>
      <div
        className={`${styles.accounts_textbox} ${styles[name + "_textbox"]}`}
        onClick={() => navigate(`/info/${id}`)}
      >
        <h3 style={{ textDecoration: "underline", textTransform: "uppercase" }}>
          {name}
        </h3>
        <h3>
          {currentCurrency === "KN"
            ? parseFloat(details.reduce(reducer, 0)).toFixed(2)
            : (parseFloat(details.reduce(reducer, 0)) / 7.5).toFixed(2)}{" "}
          {currentCurrency}
        </h3>
      </div>
    </React.Fragment>
  );
};

export default TextBox;
