import React from "react";
import { useParams } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import useFetch from "../Hooks/useFetch";
import styles from "../styles/Details.module.css";

const DynamicPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`data/${id}`);
  const { id: typeId, type, value, details } = data;

  return (
    <div className={styles.details_container}>
      <h2>{type}</h2>
      <h2>{value}</h2>
      <GoBackButton />
      {!isLoading &&
        details.map((elemet, index) => {
          return (
            <div key={index} className="item-textbox">
              <h3>{elemet.name}</h3>
              <h3>{elemet.value}</h3>
              <button>Remove me</button>
            </div>
          );
        })}
    </div>
  );
};

export default DynamicPage;
