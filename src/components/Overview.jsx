import React from "react";
import styles from "../styles/Overview.module.css";
import TextBox from "./TextBox";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Overview = () => {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <div className={styles.overview_container}>
      {data.map((element) => {
        return (
          <React.Fragment key={element.id}>
            <TextBox
              name={element.type}
              id={element.id}
              details={element.details}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Overview;
