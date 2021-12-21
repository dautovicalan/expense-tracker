import React from "react";
import { useNavigate } from "react-router-dom";

const TextBox = ({ name, value, id }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div onClick={() => navigate(`/info/${id}`)}>
        <h3>{name}:</h3>
        <h3>{value} kn</h3>
      </div>
    </React.Fragment>
  );
};

export default TextBox;
