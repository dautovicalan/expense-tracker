import React from "react";
import { useNavigate } from "react-router-dom";

const reducer = (prevValue, currentValue) => {
  return prevValue + currentValue.value;
};

const TextBox = ({ name, id, details }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div onClick={() => navigate(`/info/${id}`)}>
        <h3>{name}</h3>
        <h3>{details.reduce(reducer, 0)} kn</h3>
      </div>
    </React.Fragment>
  );
};

export default TextBox;
