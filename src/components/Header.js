import React from "react";
import { Link, useHistory } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Header = ({ setUsername, setPassword, loggedIn, setLoggedIn }) => {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    localStorage.removeItem(`Token`);
    localStorage.removeItem(`Username`);
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    history.push("/login");
  };

  return (
    <AppBar position="sticky"> 
      <Toolbar className="header">
        Fitness Tracker
        <Link to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/routines">
          <Button color="inherit">Routines</Button>
        </Link>
        <Link to="/activities">
          <Button color="inherit">Activities</Button>
        </Link>
        {!loggedIn ? null : (
          <Link to="/myroutines">
            <Button color="inherit">MY ROUTINES</Button>
          </Link>
        )}
        {loggedIn ? null : (
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        )}
        {!loggedIn ? null : (
          <Button color="inherit" onClick={handleClick}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
