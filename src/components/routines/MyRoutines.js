import React, { useState, useEffect } from "react";
import { fetchUserPublicRoutines } from "../../api";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";

import CreateRoutine from "./CreateRoutine"
import EditRoutine from "./EditRoutine";

const MyRoutines = (props) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const { userToken, loggedIn, username } = props;

  useEffect(() => {
    try {
      Promise.all([fetchUserPublicRoutines(username, userToken)]).then(([data]) => {
        console.log(data);
        setMyRoutines(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <CreateRoutine userToken={userToken} />
      <div className="view">
        <h1>My Routines</h1>
        {myRoutines.map((routine, index) => {
          return (
            <Accordion key={routine.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div>{routine.name}</div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <div>Goal: {routine.goal}</div>
                  <div>isPublic: {routine.isPublic}</div>
                  <EditRoutine routineId={routine.id} userToken={userToken}/>
                  {routine.activities.length > 0 ? (
                    <div>
                      <div>Activities</div>
                      {routine.activities.map((activity, idx) => (
                        <>
                          <div>
                            <span>{idx + 1}: </span>
                            {activity.name}
                          </div>
                          <div></div>
                          <ul>
                            <li>
                              <span>Duration: </span>
                              {activity.duration}
                            </li>
                            <li>
                              <span>count: </span>
                              {activity.count}
                            </li>
                          </ul>
                        </>
                      ))}
                    </div>
                  ) : null}
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  )
};

export default MyRoutines;
