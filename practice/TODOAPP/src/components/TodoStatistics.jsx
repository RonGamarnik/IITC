import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Statistics({ todos, activeTodos, completedTodos }) {
    const progress = todos.length > 0 ? (completedTodos / todos.length) * 100 : 0;

    return (
        <div className="stat-card">
            <p>Total todos: {todos.length}</p>
            <p>Active todos: {activeTodos}</p>
            <p>Completed todos: {completedTodos}</p>
        <div style={{display:"flex"}}>
            <label>Todo progress: </label>
            <Box sx={{ position: 'relative',display: 'inline-flex' }}>
                <CircularProgress variant="determinate" value={progress} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {`${Math.round(progress)}%`}
                    </Typography>
                </Box>
            </Box>
            </div>
        </div>
    );
}

export default Statistics;
