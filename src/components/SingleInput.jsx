import React from "react";

const SingleInput = ({ id, name }) => {
  return (
    <option value={id} style={{ textTransform: "capitalize" }}>
      {name}
    </option>
  );
};

export default SingleInput;
