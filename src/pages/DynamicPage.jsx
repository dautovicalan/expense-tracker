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

  const [isSortedDesc, setisSortedDesc] = useState(false);
  const [isSortedAsc, setisSortedAsc] = useState(false);

  const clickHandlerDesc = () => {
    setisSortedDesc(true);
    setisSortedAsc(false);
  };
  const clickHandlerAsc = () => {
    setisSortedDesc(false);
    setisSortedAsc(true);
  };

  useEffect(() => {
    if (isSortedDesc) {
      const sortedArr = [...details].sort((a, b) => b.value - a.value);
      setState(sortedArr);
    }
    if (isSortedAsc) {
      const sortedArr = [...details].sort((a, b) => a.value - b.value);
      setState(sortedArr);
    }
    if (!isSortedAsc && !isSortedDesc) {
      setState(details);
    }
  }, [details, isSortedDesc, isSortedAsc]);

  return (
    <div className={styles.details_container}>
      <h2>{type}</h2>
      <GoBackButton />
      <button onClick={clickHandlerDesc}>Sort Desc</button>
      <button onClick={clickHandlerAsc}>Sort Asc</button>
      {!isLoading &&
        state.map((element, index) => {
          return (
            <div key={index} className={styles.item_textbox}>
              <h3>{element.name}</h3>
              <h3>{element.value.toFixed(2)}</h3>
              <button
                className={buttonStyle["button-34"]}
                onClick={() =>
                  handleRemove(providedArray, index, data, typeId, setData)
                }
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
