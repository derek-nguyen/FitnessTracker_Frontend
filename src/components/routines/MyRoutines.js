import React, { useState, useEffect } from "react";
import { fetchAllPublicRoutines } from "../../api";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import CreateRoutine from "./CreateRoutine";
import EditRoutine from "./EditRoutine";
import DeleteRoutine from "./DeleteRoutine";
import MyActivityItem from "../activities/MyActivityItem";
import CreateRoutineActivity from "./CreateRoutineActivity";

const MyRoutines = (props) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const { userToken, loggedIn, username } = props;

  useEffect(() => {
    try {
      Promise.all([fetchAllPublicRoutines()]).then(([data]) => {
        setMyRoutines(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(myRoutines)

  const routineFilter = (routine) => {
    const creatorName = routine.creatorName.toLowerCase();

    if (creatorName === username) {
      return true;
    } else {
      return false;
    }
  };

  const filteredRoutines = myRoutines.filter((routine) =>
    routineFilter(routine)
  );

  return (
    <>
      <div className="routine-button-container">
        <CreateRoutine
          loggedIn={loggedIn}
          userToken={userToken}
          setMyRoutines={setMyRoutines}
          myRutines={myRoutines}
        />
      </div>
      <div className="view">
        <h1>My Routines</h1>
        {filteredRoutines.map((routine, index) => {
          return (
            <Accordion key={routine.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div>{routine.name}</div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <div>Goal: {routine.goal}</div>
                  <div>isPublic: {routine.isPublic.toString()}</div>
                  <div className="routine-button-container">
                    <EditRoutine routineId={routine.id} userToken={userToken} />
                    <CreateRoutineActivity routineId={routine.id} setMyRoutines={setMyRoutines}/>
                    <DeleteRoutine
                      routineId={routine.id}
                      userToken={userToken}
                    />
                  </div>
                  {routine.activities.length > 0 ? (
                    <div>
                      <br />
                      <h3>Routine Activities</h3>
                      {routine.activities.map((activity, idx) => (
                        <MyActivityItem activity={activity} idx={idx} routineId={routine.id} />
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
  );
};

export default MyRoutines;
