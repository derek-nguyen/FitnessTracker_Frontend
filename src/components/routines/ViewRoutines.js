import React, { useState, useEffect } from "react";
import { fetchAllRoutines } from "../../api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

const ViewRoutines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    try {
      Promise.all([fetchAllRoutines()]).then(([data]) => {
        setRoutines(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Routines</h1>
      <div className="view">
        {routines.map((routine, index) => {
          return (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div>{routine.name}</div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  Goal: {routine.goal}
                  CreatorName: {routine.creatorName}
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
              {/* <AccordionSummary>
                <div>
                  <div>{routine.id}</div>
                  <div>{routine.creatorName}</div>
                  <div>{routine.name}</div>
                  <div>{routine.goal}</div>
                  <div>
                    {routine.activities.length > 1 ? (
                      <>
                        <h3>Activities for Routine</h3>
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
                      </>
                    ) : (
                      <span></span>
                    )}
                  </div>
                </div>
              </AccordionSummary> */}
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default ViewRoutines;
