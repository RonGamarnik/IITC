import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BasicPagination = ({ count, page, onPageChange }) => {
    return (
        <Stack spacing={2} >
            <Pagination 
                className='paging'
        count={count} 
        color="primary" 
        page={page} 
        onChange={onPageChange} 
      />
    </Stack>
  );
};

export default BasicPagination;
