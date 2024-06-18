import axios from "axios";
import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

function Item({ todo, toggleTodoComplete, removeTodo }) {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickSnackbar = (message) => {
        setSnackbarMessage(message);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const handleCheckboxChange = () => {
        const updatedStatus = !todo.isComplete;
        toggleTodoComplete(todo.id);
        axios.patch(`http://localhost:8001/todos/${todo.id}`, { isComplete: updatedStatus })
            .then(() => {
                handleClickSnackbar(updatedStatus ? "Todo marked as complete" : "Todo marked as incomplete");
            })
            .catch(error => {
                console.error("There was an error updating the todo status!", error);
            });
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleDelete = () => {
        removeTodo(todo.id);
        handleClickSnackbar("Todo deleted");
        setOpenDialog(false); // Close the dialog after deleting
    };

    const actionSnackbar = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Tooltip title={todo.label}>
            <li key={todo.id} className="todoItem">
                <label className={todo.isComplete ? 'completedTodo' : ''}>
                    <Checkbox onChange={handleCheckboxChange} checked={todo.isComplete} />
                    {todo.title}
                </label>
                <div className="buttons">
                    <Tooltip title='Details'>
                        <IconButton component={Link} to={`/Todo/${todo.id}`} style={{ border: 'none', background: 'none' }}>
                            <InfoIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton onClick={handleOpenDialog} style={{ border: 'none', background: 'none' }}>
                            <DeleteForeverIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Tooltip>
                </div>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message={snackbarMessage}
                    action={actionSnackbar}
                />
                <Dialog
                    className="dialog"
                    open={openDialog}
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className="dialog-content" id="alert-dialog-title" >{"Delete Todo?"}</DialogTitle>
                    <DialogContent className="dialog-content">
                        <DialogContentText className="dialog-content" id="alert-dialog-description">
                            Are you sure you want to delete this todo?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className="dialog-content">
                        <Button onClick={handleCloseDialog} className="dialog-content" >
                            Cancel
                        </Button>
                        <Button onClick={handleDelete} className="dialog-content"  autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </li>
        </Tooltip>
    );
}

export default Item;
