import React, { useState } from "react";
import styles from "../styles/Overview.module.css";

const Overview = ({ income, food, goingOut, other }) => {
  return (
    <React.Fragment>
      <h2>Overview for December</h2>
      <div className={styles.overview_container}>
        <div className={styles.accounts_textbox}>
          <h3 className={styles.align_left}>Income:</h3>
          <h3 className="align-right">{income} kn</h3>
        </div>
        <div className={styles.accounts_textbox}>
          <h3 className={styles.align_left}>Food:</h3>
          <h3 className="align-right">{Number(food).toFixed(2)} kn</h3>
        </div>
        <div className={styles.accounts_textbox}>
          <h3 className={styles.align_left}>Going out:</h3>
          <h3 className="align-right">{Number(goingOut).toFixed(2)} kn</h3>
        </div>
        <div className={styles.accounts_textbox}>
          <h3 className={styles.align_left}>Other:</h3>
          <h3 className="align-right">{Number(other).toFixed(2)} kn</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Overview;
