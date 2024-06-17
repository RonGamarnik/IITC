import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import BasicTabs from './Tabs';

function Filter({ filterTitle, setFilterTitle, filterCompleted, setFilterCompleted, todos, selectedTab, setSelectedTab }) {
    const [title, setTitle] = useState(filterTitle);
    const [completed, setCompleted] = useState(filterCompleted);

    useEffect(() => {
        const handler = setTimeout(() => {
            setFilterTitle(title);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [title, setFilterTitle]);

    const handleCompletedChange = (event) => {
        const { checked } = event.target;
        setCompleted(checked);
        setFilterCompleted(checked);
    };

    const allTodos = todos;
    const activeTodos = todos.filter(todo => !todo.isComplete);
    const completedTodos = todos.filter(todo => todo.isComplete);

    return (
        <div className='searchBar'>
            <div style={{ width: 500, maxWidth: '100%' }}>
                <TextField
                    fullWidth
                    label="Filter by title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="fullWidth"
                />
            </div>
            <BasicTabs
                todos={allTodos}
                activeTodos={activeTodos}
                completedTodos={completedTodos}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
        </div>
    );
}

export default Filter;
