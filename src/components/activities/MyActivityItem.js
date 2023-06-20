import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

const MyActivityItem = (props) => {
    const { idx, activity } = props;

    return (
        <Accordion key={idx}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div>
                    <span>{idx + 1}: </span>
                    {activity.name}
                </div>
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
        </Accordion>
    )
}

export default MyActivityItem;