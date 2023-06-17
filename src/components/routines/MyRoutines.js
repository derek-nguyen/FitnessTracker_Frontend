import React, { useState, useEffect } from "react";
import { fetchUserPublicRoutines } from "../../api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateRoutine from "./CreateRoutine"

const MyRoutines = (props) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [routineName, setRoutineName] = useState('');
  const [routineGoal, setRoutineGoal] = useState('');
  const { userToken, loggedIn, username } = props;


  function handleSubmit() {
    return 'hi'
  }

  useEffect(() => {
    try {
      Promise.all([fetchUserPublicRoutines(username, userToken)]).then(([data]) => {
        console.log(data);
        setMyRoutines(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [myRoutines]);

  return (
    <>
      <CreateRoutine userToken={userToken} />
      <div className="view">
        <h1>My Routines</h1>
        {myRoutines.map((routine, index) => {
          return (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div>{routine.name}</div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  Goal: {routine.goal}
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
