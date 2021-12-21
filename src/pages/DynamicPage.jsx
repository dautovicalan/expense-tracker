import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const DynamicPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`data/${id}`);
  const { id: typeId, type, value, details } = data;

  return (
    <div>
      <h2>{type}</h2>
      <h2>{value}</h2>
      {!isLoading &&
        details.map((elemet, index) => {
          return (
            <div key={index} className="item-textbox">
              <h3>{elemet.name}</h3>
              <h3>{elemet.value}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default DynamicPage;
