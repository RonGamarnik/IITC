// src/components/TodoLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';

const TodoLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box sx={{ marginLeft: 200, width: '100%' }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default TodoLayout;
