import React, { useState } from "react";
import {
    Button,
    Box,
    Modal,
    Container,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from "@mui/material";
import { editRoutine } from '../../api'

const EditRoutine = (props) => {
    const { routineId, userToken } = props;
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [routineIsPublic, setRoutineIsPublic] = useState(null);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    function handleEdit(routineId, userToken, routineObj) {
        alert(`You've selected routine ID: ${routineId},${userToken}`)
    }

    return (
        <div>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleOpen}
            > Edit </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Container maxWidth="sm">
                        <h1>Edit Routine</h1>
                        <form onSubmit={() => handleEdit(routineId, userToken)}>
                            <TextField
                                label="New Routine Name"
                                value={routineName}
                                onChange={(e) => setRoutineName(e.target.value)}
                                fullWidth
                            >
                            </TextField>
                            <TextField
                                label="New Routine Goal"
                                value={routineGoal}
                                onChange={(e) => setRoutineGoal(e.target.value)}
                                fullWidth
                            >
                            </TextField>
                            <FormControl fullWidth>
                                <InputLabel>Is Public</InputLabel>
                                <Select
                                    value={routineIsPublic}
                                    onChange={(e) => setRoutineIsPublic(e.target.value)}
                                >
                                    <MenuItem value={true}>True</MenuItem>
                                    <MenuItem value={false}>False</MenuItem>
                                </Select>
                            </FormControl>
                            <div>
                                <Button type="submit" variant="contained" color="primary">Submit</Button>
                            </div>
                        </form>
                    </Container>
                </Box>
            </Modal>

        </div>
    )
}

export default EditRoutine