import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import useFetch from "../Hooks/useFetch";
import styles from "../styles/Details.module.css";
import buttonStyle from "../styles/button.module.css";
import { handleRemove } from "../functions/handleRemove";
import { useState, useEffect, useMemo } from "react";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import deleteData from "../Hooks/deleteData";

const DynamicPage = () => {
  const { id } = useParams();
  const { setData } = useContext(DataContext);
  const { currentCurrency } = useContext(DataContext);
  const { data, isLoading } = useFetch(`data/${id}`);
  const { id: typeId, type, details } = data;
  const [state, setState] = useState(details);
  const providedArray = useMemo(() => ({ state, setState }), [state, setState]);
  const navigator = useNavigate();

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
      {!isLoading && state.length > 1 && (
        <React.Fragment>
          <button
            onClick={clickHandlerDesc}
            className={buttonStyle["button-34"]}
          >
            Sort Price Desc
          </button>
          <button
            onClick={clickHandlerAsc}
            className={buttonStyle["button-34"]}
          >
            Sort Price Asc
          </button>
        </React.Fragment>
      )}
      {!isLoading && state.length !== 0 ? (
        state.map((element, index) => {
          return (
            <div key={index} className={styles.item_textbox}>
              <h3>{element.name}</h3>
              <h3>
                {currentCurrency === "KN"
                  ? parseFloat(element.value.toFixed(2))
                  : (parseFloat(element.value.toFixed(2)) / 7.5).toFixed(
                      2
                    )}{" "}
                {currentCurrency}
              </h3>
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
        })
      ) : (
        <p>No items in this section</p>
      )}
      <button
        className={buttonStyle["button-34"]}
        onClick={() => {
          deleteData(id, setData);
          navigator("/");
        }}
      >
        Delete this section
      </button>
    </div>
  );
};

export default DynamicPage;
