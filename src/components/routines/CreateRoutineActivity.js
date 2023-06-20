import React, { useState, useEffect } from "react";
import { Button, Modal, Box, Container, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { addRoutineActivity, fetchAllActivities } from '../../api'
import swal from "sweetalert";

const CreateRoutineActivity = (props) => {
    const { routineId } = props;

    const [count, setCount] = useState(1);
    const [duration, setDuration] = useState(1);
    const [selectedActivity, setSelectedActivity] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 4,
    };

    async function handleSubmit(event) {
        event.preventDefault();

        const selectedActivityObj = activities.find(activity => activity.name === selectedActivity)

        const routineActivityObj = {
            activityId: selectedActivityObj.id,
            count: count,
            duration: duration
        }

        try {
            const createdRoutineActivity = await addRoutineActivity(routineId, routineActivityObj);

            if (createdRoutineActivity) {
                swal('Activity successfully added');
                window.location.reload();
                // handleClose();
            }

        } catch (error) {
            throw error;
        }
    }

    return (
        <div>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >Add Activity</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Container maxWidth="sm">
                        <h1>Add Activity To Routine</h1>
                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth>
                                <InputLabel>Activity</InputLabel>
                                <Select
                                    value={selectedActivity}
                                    onChange={e => setSelectedActivity(e.target.value)}
                                >
                                    {activities.map((activity) => (
                                        <MenuItem key={activity.id} value={activity.name}>
                                            {activity.name}
                                        </MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                            <TextField
                                label="Set Count"
                                value={count}
                                onChange={(e) => setCount(e.target.value)}
                                fullWidth
                                required
                            >
                            </TextField>
                            <TextField
                                label="Set Duration"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                fullWidth
                                required
                            >
                            </TextField>
                            <div>
                                <Button type="submit" variant="contained" color="primary">Add Activity</Button>
                            </div>
                        </form>
                    </Container>
                </Box>
            </Modal>
        </div>
    )
}

export default CreateRoutineActivity;