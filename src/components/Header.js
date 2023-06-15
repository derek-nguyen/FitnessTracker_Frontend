import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Header = (props) => {
  return (
    <AppBar>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
