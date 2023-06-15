import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import {
  Home,
  Header,
  ViewActivities,
  ViewRoutines,
  Login,
  Register,
} from "./components";

const App = () => {
  const loginKey = localStorage.getItem(`Token`);
  const userNameKey = localStorage.getItem(`Username`);

  const [username, setUsername] = useState(userNameKey ? userNameKey : "");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState(loginKey ? loginKey : false);
  const [loggedIn, setLoggedIn] = useState(loginKey ? true : false);

  return (
    <div className="app">
      {/* <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/my-routines">My Routines</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav> */}
      {/* <Router> Router is already wrapped for App */}
      <Header
        setUsername={setUsername}
        setPassword={setPassword}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Switch>
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              userToken={userToken}
              setUserToken={setUserToken}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register
              {...props}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              userToken={userToken}
              setUserToken={setUserToken}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          )}
        />
        <Route
          path="/routines"
          render={(props) => (
            <ViewRoutines
              {...props}
              username={username}
              userToken={userToken}
              loggedIn={loggedIn}
            />
          )}
        />
        <Route
          path="/myroutines"
          render={(props) => (
            <MyRoutines
              {...props}
              username={username}
              userToken={userToken}
              loggedIn={loggedIn}
            />
          )}
        />
        <Route
          path="/activities"
          render={(props) => (
            <ViewActivities
              {...props}
              username={username}
              userToken={userToken}
              loggedIn={loggedIn}
            />
          )}
        />

        <Route
          path="/"
          render={(props) => (
            <Home {...props} username={username} loggedIn={loggedIn} />
          )}
        />
      </Switch>
      {/* </Router> */}
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);

// import React from "react";
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom";

// import App from "./app.js";

// const root = createRoot(document.getElementById('app'))

// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// )

// /*
// Using React-router-dom ^v6.10
// - replaces BrowserRouter with createBrowserRouter

// */
