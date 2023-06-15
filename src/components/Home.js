import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = ({ username, loggedIn }) => {
  return (
    <div className="home">
      <h1>Ftiness Tracker</h1>
      {loggedIn ? <h2>Welcome, {username}</h2> : null}
    </div>
  );
};

export default Home;
