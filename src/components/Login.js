import React from "react";

import swal from "sweetalert";
import { login } from "../api";
import { Link } from "react-router-dom";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  loggedIn,
  userToken,
  setUserToken,
  setLoggedIn,
  history,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(username, password);
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
    return <div className="login">already logged in</div>;
  } else {
    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            minLength="6"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <input
            type="password"
            minLength="6"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <label>Don't have an account? </label>
          <Link to="/register">Sign up Here</Link>
        </div>
      </div>
    );
  }
};

export default Login;
