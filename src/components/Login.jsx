import React from "react";
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";

const Login = ({ setIsLoggedIn }) => {
  const email = useRef();
  const pass = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: email.current.value,
        pass: pass.current.value,
      })
    );
    setIsLoggedIn({
      email: email.current.value,
      pass: pass.current.value,
    });
    console.log(email.current.value, pass.current.value);
  };

  return (
    <div style={{ width: "50%", margin: "auto", padding: "30px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pass} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
