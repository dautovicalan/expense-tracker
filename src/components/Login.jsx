import React from "react";
import { useRef } from "react";
import "../styles/Login.css";
import axios from "axios";

const urlSignUp =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACmdpzxXl3eyEJvs44c3P_RVgDv9nze84";

const urlSignIn =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwnDEANkIRujjiwyyG_6q89xH-U-no7js";

const Login = ({ setIsLoggedIn }) => {
  const email = useRef();
  const pass = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.current.value.trim().length === 0 &&
      pass.current.value.trim().length === 0
    ) {
      return;
    }

    const enteredEmail = email.current.value;
    const enteredPassword = pass.current.value;

    const response = await axios
      .post(urlSignIn, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err.response);
      });
    // localStorage.setItem(
    //   "currentUser",
    //   JSON.stringify({
    //     email: email.current.value,
    //     pass: pass.current.value,
    //   })
    // );
    // setIsLoggedIn({
    //   email: email.current.value,
    //   pass: pass.current.value,
    // });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = pass.current.value;

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      alert("Please provide values");
      return;
    }

    axios
      .post(urlSignUp, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="content">
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              autoComplete="nope"
              required
              ref={email}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              required
              ref={pass}
            />
          </div>
          <a href="#" className="link">
            Forgot Your Password?
          </a>
        </div>
        <div className="action">
          <button>Register</button>
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
