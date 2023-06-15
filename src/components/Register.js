import React, { useState } from "react";
import { registerUser } from "../api";

const Register = ({
  username,
  setUsername,
  password,
  setPassword,
  userToken,
  setUserToken,
  setLoggedIn,
  loggedIn,
  history,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await registerUser(username, password);
    // const token = data.token;
    // localStorage.setItem("Token", token);
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(event) => setUserName(event.target.value)}
          required
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
