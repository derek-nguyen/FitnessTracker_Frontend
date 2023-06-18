import React, { useState, useEffect } from "react";
import { createRoutine } from "../../api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";

const CreateRoutine = (props) => {
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState('')
    const { userToken, loggedIn, username } = props;


    async function handleSubmit(event) {
        event.preventDefault();

        // console.log(userToken);
        const routineObj = {
            name: routineName,
            goal: routineGoal,
            isPublic: isPublic
        }

        const createdRoutine = await createRoutine(username, userToken, routineObj);
        console.log(createdRoutine)

        if (createdRoutine) {
            setRoutineName('');
            setRoutineGoal('');
            window.location.reload();

        }
    }

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
                    <FormControl fullWidth>
                        <InputLabel>Is Public (optional)</InputLabel>
                        <Select
                            value={isPublic}
                            onChange={(e) => setIsPublic(e.target.value)}
                        >
                            <MenuItem value={true}>True</MenuItem>
                            <MenuItem value={false}>False</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Container>
        </>
    )
};

export default CreateRoutine;
