// src/components/Sidebar.jsx

import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Box  sx={{ width: 200, bgcolor: '#333', height: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 1000, padding: 2, alignItems:"center" }}>
            <nav>
                <ul>
                    <li>
                        <Link to="/todo">Todo List</Link>
                    </li>
                    <li>
                        <Link to="/todo/create">Create Todo</Link>
                    </li>
                </ul>
            </nav>
        </Box>
    );
};

export default Sidebar;
