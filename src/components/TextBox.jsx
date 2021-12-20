import React from "react";

const TextBox = ({ name, value }) => {
  return (
    <React.Fragment>
      <div>
        <h3>{name }:</h3>
        <h3>{value} kn</h3>
      </div>
    </React.Fragment>
  );
};

export default TextBox;
