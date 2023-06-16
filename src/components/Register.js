import React, { useState } from "react";
import { registerUser } from "../api";
import swal from "sweetalert";

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
    try {
      const data = await registerUser(username, password);
      if (data.error) {
        setUsername("");
        setPassword("");
        swal(data.message);
      } else {
        const token = data.token;
        localStorage.setItem(`Token`, token);
        setUserToken(token);
        setLoggedIn(true);
        setUsername(username);
        localStorage.setItem(`Username`, username);
        swal(data.message);
        history.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loggedIn) {
    return <div>You are already logged in</div>;
  } else {
    return (
      <div className="register">
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
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
  }
};

export default Register;
