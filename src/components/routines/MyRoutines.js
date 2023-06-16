import React, { useState, useEffect } from "react";
import { fetchAllPublicRoutines } from "../../api";

const MyRoutines = (props) => {
  const [routines, setRoutines] = useState([]);
  const { userToken, loggedIn, username } = props;

  useEffect(() => {
    try {
      Promise.all([fetchAllPublicRoutines()]).then(([data]) => {
        console.log(data);
        setRoutines(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default MyRoutines;
