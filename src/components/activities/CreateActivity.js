import React, { useState } from "react";
import { fetchAllActivities, createActivitiy } from "../../api";
import swal from "sweetalert";

const initialActivityData = {
  description: "",
  name: "",
  isPublic: true,
};

const CreateActivity = (props) => {
  const [activityData, setActivityData] = useState(initialActivityData);
  const { userToken, loggedIn, username, setMyRoutines } = props;

  const handleChange = (e) => {
    setActivityData({
      ...activityData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(userToken);

    try {
      const data = await createActivitiy(
        activityData.name.trim(),
        activityData.description.trim(),
        userToken
      );
      if (data.error) swal(data.error);
      else swal("Activity successfully Added");

      try {
        Promise.all([fetchAllActivities()]).then(([data]) => {
          setActivityData(data);
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
      swal("Failed to Add Activity");
    } finally {
      activityData.name = "";
      activityData.description = "";
    }
  }
  return (
    loggedIn && (
      <div>
        <h2>Add New Activity</h2>
        <form>
          <input
            value={activityData.name}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            value={activityData.description}
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
          />

          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  );
};

export default CreateActivity;
