import React from "react";
import styles from "../styles/Overview.module.css";
import { useNavigate } from "react-router-dom";
import TextBox from "./TextBox";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Overview = () => {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  return (
    <React.Fragment>
      <h2>Overview for December</h2>
      <div className={styles.overview_container}>
        {data.map((element) => {
          return (
            <TextBox
              name={element.type}
              value={element.value}
              key={element.id}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Overview;
