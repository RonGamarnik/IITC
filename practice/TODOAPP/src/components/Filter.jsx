import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import BasicTabs from './Tabs';

function Filter({ filterTitle, filterCompleted, todos, selectedTab, setSearchParams }) {
    const [title, setTitle] = useState(filterTitle);
    const [completed, setCompleted] = useState(filterCompleted);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchParams(params => {
                if (title) {
                    params.set('title', title);
                } else {
                    params.delete('title');
                }
                return params;
            });
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [title, setSearchParams]);

    useEffect(() => {
        setSearchParams(params => {
            if (completed) {
                params.set('completed', completed);
            } else {
                params.delete('completed');
            }
            return params;
        });
    }, [completed, setSearchParams]);

    const handleCompletedChange = (event) => {
        const { checked } = event.target;
        setCompleted(checked);
    };

    const handleTabChange = (event, newValue) => {
        setSearchParams(params => {
            params.set('tab', newValue);
            return params;
        });
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
                setSelectedTab={handleTabChange}
            />
        </div>
    );
}

export default Filter;
