import React, { useState } from "react";
import { fetchAllPublicRoutines, createRoutine } from "../../api";

const initialRoutineData = {
  goal: "",
  name: "",
  isPublic: true,
};

const CreateRoutine = (props) => {
  const [routineData, setRoutineData] = useState(initialRoutineData);
  const { userToken, loggedIn, username, setMyRoutines } = props;

  // const handleChange = (e) => {
  //   const value = e.target.value.trim();
  //   setRoutineData({
  //     ...routineData,
  //     [e.target.name]: value,
  //   });
  // };

  const handleChange = (e) => {
    setRoutineData({
      ...routineData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(userToken);

    try {
      const data = await createRoutine(
        userToken,
        routineData.name.trim(),
        routineData.goal.trim(),
        routineData.isPublic
      );
      if (data.error) swal(data.error);
      else swal("Routine successfully Added");

      //fetch new Routines from the api
      try {
        Promise.all([fetchAllPublicRoutines()]).then(([data]) => {
          setMyRoutines(data);
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
      swal("Failed to Add Routine");
    } finally {
      routineData.name = "";
      routineData.goal = "";
    }
    /*
    const routineObj = {
      name: routineName,
      goal: routineGoal,
      isPublic: true,
    };

    const createdRoutine = await createRoutine(username, userToken, routineObj);
    console.log(createdRoutine);

    if (createdRoutine) {
      setRoutineName("");
      setRoutineGoal("");
    }
*/
  }
  return (
    loggedIn && (
      <div>
        <h2>Add New Routine</h2>
        <form>
          <input
            value={routineData.name}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            value={routineData.goal}
            type="text"
            name="goal"
            placeholder="Goal"
            onChange={handleChange}
          />

          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  );
  /*
  return (
    <>
      <Container maxWidth="sm">
        <h1>Create Routine Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Routine Name"
            value={routineName}
            onChange={(e) => setRoutineName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Routine Goal"
            value={routineGoal}
            onChange={(e) => setRoutineGoal(e.target.value)}
            fullWidth
            multiline
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
  */
};

export default CreateRoutine;
