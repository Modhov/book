import React, { useState } from "react";
import "../styles/signin.css";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend align="left">Sign Up</legend>
          <div className="input-grid">
            <input
              placeholder="userName"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
            <input
              placeholder="email"
              type="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <button type="submit">Sign Up</button>
            <a href="#/sign-in">already have an account? sign in.</a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
