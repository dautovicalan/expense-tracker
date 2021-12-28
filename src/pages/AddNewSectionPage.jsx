import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import postData from "../Hooks/postData";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AddNewSectionPage = () => {
  const sectionName = useRef();
  const { setData } = useContext(DataContext);
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSection = postData({
      type: sectionName.current.value,
      details: [],
    })
      .then((data) => setData((prevValue) => [...prevValue, data]))
      .catch((err) => console.log(err.message));
    navigator("/");
  };

  return (
    <Form style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Section name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter section name"
          ref={sectionName}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddNewSectionPage;
