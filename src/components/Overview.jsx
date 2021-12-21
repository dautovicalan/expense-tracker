import React from "react";
import styles from "../styles/Overview.module.css";
import { useNavigate } from "react-router-dom";
import TextBox from "./TextBox";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { Route, Routes } from "react-router-dom";

const Overview = () => {
  const { data } = useContext(DataContext);
  // TODO Look for outlet solution for nested routing
  return (
      <div className={styles.overview_container}>
        {data.map((element) => {
          return (
            <React.Fragment key={element.id}>
              <TextBox
                name={element.type}
                value={element.value}
                id={element.id}
              />
            </React.Fragment>
          );
        })}
      </div>
  );
};

export default Overview;
