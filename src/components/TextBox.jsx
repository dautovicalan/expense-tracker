import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const reducer = (prevValue, currentValue) => {
  return prevValue + currentValue.value;
};

const TextBox = ({ name, id, details }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(details.reduce(reducer, 0));
  return (
    <React.Fragment>
      <div onClick={() => navigate(`/info/${id}`)}>
        <h3>{name}</h3>
        <h3>{value} kn</h3>
      </div>
    </React.Fragment>
  );
};

export default TextBox;
