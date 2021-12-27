import React from "react";
import { useRef } from "react";
import "../styles/Login.css";

const Login = ({ setIsLoggedIn }) => {
  const email = useRef();
  const pass = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.current.value.trim().length === 0 &&
      pass.current.value.trim().length === 0
    ) {
      return;
    }
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
              ref={email}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
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
