import React from "react";
import { useNavigate } from "react-router-dom";

const TextBox = ({ name, value }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div onClick={() => navigate(`/${name}`)}>
        <h3>{name}:</h3>
        <h3>{value} kn</h3>
      </div>
    </React.Fragment>
  );
};

export default TextBox;
