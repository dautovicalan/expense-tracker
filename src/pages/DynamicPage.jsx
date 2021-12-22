import React from "react";
import { useParams } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import useFetch from "../Hooks/useFetch";
import styles from "../styles/Details.module.css";
import buttonStyle from "../styles/button.module.css";
import { handleRemove } from "../functions/handleRemove";
import { useState, useEffect, useMemo } from "react";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const DynamicPage = () => {
  const { id } = useParams();
  const { setData } = useContext(DataContext);
  const { data, isLoading } = useFetch(`data/${id}`);
  const { id: typeId, type, details } = data;
  const [state, setState] = useState(details);
  const providedArray = useMemo(() => ({ state, setState }), [state, setState]);

  useEffect(() => {
    setState(details);
  }, [details]);

  return (
    <div className={styles.details_container}>
      <h2>{type}</h2>
      <GoBackButton />
      {!isLoading &&
        state.map((elemet, index) => {
          return (
            <div key={index} className={styles.item_textbox}>
              <h3>{elemet.name}</h3>
              <h3>{elemet.value.toFixed(2)}</h3>
              <button
                className={buttonStyle["button-34"]}
                onClick={() => handleRemove(providedArray, index, data, typeId, setData)}
              >
                REMOVE
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default DynamicPage;
