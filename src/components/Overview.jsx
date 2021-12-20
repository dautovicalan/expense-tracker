import React from "react";
import styles from "../styles/Overview.module.css";
import { useNavigate } from "react-router-dom";

const dajfood = (details) => {
  let test = 0;
  details.map((element) => {
    test += element.value;
  });
  return test;
};

const Overview = ({ income, food, goingOut, other }) => {
  const navigate = useNavigate();
  const foodValue = dajfood(food.details);
  const goingOutValue = dajfood(goingOut.details);
  const otherValue = dajfood(other.details);

  console.log(foodValue, goingOutValue  , otherValue);

  return (
    <React.Fragment>
      <h2>Overview for December</h2>
      <div className={styles.overview_container}>
        <div className={styles.accounts_textbox}>
          <h3 className={styles.align_left}>Income:</h3>
          <h3 className="align-right">{income.value} kn</h3>
        </div>
        <div
          className={styles.accounts_textbox}
          onClick={() => navigate("/food")}
        >
          <h3 className={styles.align_left}>Food:</h3>
          <h3 className="align-right">{Number(foodValue).toFixed(2)} kn</h3>
        </div>
        <div
          className={styles.accounts_textbox}
          onClick={() => navigate("/going-out")}
        >
          <h3 className={styles.align_left}>Going out:</h3>
          <h3 className="align-right">{Number(goingOutValue).toFixed(2)} kn</h3>
        </div>
        <div
          className={styles.accounts_textbox}
          onClick={() => navigate("/other")}
        >
          <h3 className={styles.align_left}>Other:</h3>
          <h3 className="align-right">{Number(otherValue).toFixed(2)} kn</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Overview;
