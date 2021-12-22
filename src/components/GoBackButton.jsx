import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/button.module.css";

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <button
        onClick={() => navigate("/")}
        className={styles["button-34"]}
      >
        GO BACK TO MAIN
      </button>
    </React.Fragment>
  );
};

export default GoBackButton;
