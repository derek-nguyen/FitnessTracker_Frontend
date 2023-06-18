import React from "react";
import { Button } from "@mui/material";
import { deleteRoutine } from "../../api"

const DeleteRoutine = (props) => {
    const { routineId, userToken } = props;

    const handleClick = async () => {
        try {
            const deletedRoutine = await deleteRoutine(userToken, routineId);

            if (deletedRoutine) {
                window.location.reload();
            }
        } catch (error){
            throw error;
        }
    }

    return (
        <Button
            type="submit"
            variant="outlined"
            color="error"
            onClick={handleClick}
        >Delete</Button>
    )
}

export default DeleteRoutine;