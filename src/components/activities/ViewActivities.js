import React, { useState, useEffect } from "react";
import { fetchAllActivities } from "../../api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionSummary from "@material-ui/core/AccordionSummary";

const ViewActivities = (props) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    try {
      Promise.all([fetchAllActivities()]).then(([data]) => {
        setActivities(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(activities[0])

  return (
    <div className="view">
      <h1>Activities</h1>
      <div>
        {activities.map((activity, index) => {
          return (
            <Accordion>
              <AccordionSummary>
                <div>
                  <div>{activity.id}</div>
                  <div>{activity.name}</div>
                  <div>{activity.description}</div>
                </div>
              </AccordionSummary>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default ViewActivities;
