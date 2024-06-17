import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Work',
    'School',
    'Business',
    'Personal life',
    'Home',
    'Sport',
    'Education',
    'Friends',
    'Kids',
];

function MultipleSelectCheckmarks({ selectedTags, setSelectedTags }) {
    const handleChange = (event) => {
        const { value } = event.target;
        setSelectedTags(value);
    };

    return (
        <FormControl sx={{ m: 1, width: 300, backgroundColor:"#333" }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={selectedTags}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={selectedTags.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default MultipleSelectCheckmarks;
