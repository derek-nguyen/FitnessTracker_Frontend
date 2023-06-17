import React, { useState, useEffect } from "react";
import { fetchAllPublicRoutines } from "../../api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

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

  return (
    <>
      <div>My Routines</div>
    </>
  )
};

export default MyRoutines;
