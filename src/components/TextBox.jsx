import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Overview.module.css";

const reducer = (prevValue, currentValue) => {
  return prevValue + currentValue.value;
};

const TextBox = ({ name, id, details }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div
        onClick={() => navigate(`/info/${id}`)}
        className={`${styles.accounts_textbox} ${styles[name + "_textbox"]}`}
      >
        <h3 style={{ textDecoration: "underline", textTransform: "uppercase" }}>
          {name}
        </h3>
        <h3>{details.reduce(reducer, 0).toFixed(2)} kn</h3>
      </div>
    </React.Fragment>
  );
};

export default TextBox;
