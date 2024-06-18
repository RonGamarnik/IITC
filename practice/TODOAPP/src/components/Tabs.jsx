import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicTabs({ selectedTab, setSelectedTab }) {
    const handleChange = (event, newValue) => {
        setSelectedTab(event, newValue);
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
    selectedTab: PropTypes.number.isRequired,
    setSelectedTab: PropTypes.func.isRequired,
};

export default BasicTabs;
