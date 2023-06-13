import React, { useState, useEffect } from "react";
import { fetchAllActivities } from "../../api";

const ViewActivities = (props) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        try {
            Promise.all([fetchAllActivities()])
                .then(([data]) => {
                    setActivities(data)
                })
        } catch (error) {
            console.log(error);
        }
    }, [])

    console.log(activities)

    return (
        <div>
            <h1>HELLO</h1>
            <div>{activities.map((activity, index) => {
                <div>
                    <div>{activity}</div>
                    <div>{activity.id}</div>
                    <div>{activity.name}</div>
                    <div>{activity.description}</div>
                </div>
            })}</div>
        </div>
    )
}

export default ViewActivities;