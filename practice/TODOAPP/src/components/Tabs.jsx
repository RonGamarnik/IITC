import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <div style={{ padding: 24 }}>{children}</div>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicTabs({ todos, activeTodos, completedTodos, selectedTab, setSelectedTab }) {
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div className='tabs-nav' style={{ width: '100%' }}>
            <div style={{ borderBottom: '1px solid', borderColor: 'divider' }}>
                <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All todos" {...a11yProps(0)} />
                    <Tab label="Active todos" {...a11yProps(1)} />
                    <Tab label="Completed todos" {...a11yProps(2)} />
                </Tabs>
            </div>
        </div>
    );
}

BasicTabs.propTypes = {
    todos: PropTypes.array.isRequired,
    activeTodos: PropTypes.array.isRequired,
    completedTodos: PropTypes.array.isRequired,
    selectedTab: PropTypes.number.isRequired,
    setSelectedTab: PropTypes.func.isRequired,
};

export default BasicTabs;
