import React, { useState, useEffect } from 'react';

function Filter({ filterTitle, setFilterTitle, filterCompleted, setFilterCompleted }) {
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

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleCompletedChange}
                />
                Show completed only
            </label>
        </div>
    );
}

export default Filter;
