import React, { useRef, useState } from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MultipleSelectCheckmarks from './Chip'; 

function Form() {
    const addTodo = async (event, inputRef, selectedTags) => {
        event.preventDefault();

        const newTodoTitle = inputRef.current.value.trim();
        if (newTodoTitle === '') return;

        const newTodo = {
            title: newTodoTitle,
            isComplete: false,
            label: selectedTags
        };

        try {
            setLoading(true); // Start loading indicator
            const response = await axios.post('http://localhost:8001/todos', newTodo);
            setTodos([...todos, response.data]);
            inputRef.current.value = '';
            inputRef.current.focus();
        } catch (error) {
            console.error('Error adding new to-do:', error);
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    const toggleTodoComplete = async (id) => {
        const todo = todos.find(todo => todo.id === id);
        const updatedTodo = { ...todo, isComplete: !todo.isComplete };

        try {
            setLoading(true);
            await axios.patch(`http://localhost:8001/todos/${id}`, { isComplete: updatedTodo.isComplete });
            setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
        } catch (error) {
            console.error("Error updating todo", error);
        } finally {
            setLoading(false);
        }
    };

    const inputRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Ensure inputRef.current is defined before accessing its value
        if (!inputRef.current || !inputRef.current.value.trim()) {
            return;
        }

        // Passing input value and selected tags to addTodo function
        await addTodo(event, inputRef, selectedTags);

        // Clearing the input field after submit
        inputRef.current.value = '';

        // Clearing selected tags after submit
        setSelectedTags([]);

        // Open the snackbar
        handleClick();
    };

    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField fullWidth inputRef={inputRef} label="Enter a new todo" />
            </Box>
            <MultipleSelectCheckmarks selectedTags={selectedTags} setSelectedTags={setSelectedTags} required/>
            <Tooltip title="Add new todo">
                <button id='submit-button' type="submit">
                    <AddCommentIcon sx={{ color: 'black' }} />
                </button>
            </Tooltip>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Todo has been added"
                action={action}
            />
        </form>
    );
}

export default Form;
