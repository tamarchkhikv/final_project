import * as React from 'react';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CustomPagination = () => {
  return (
    <div className='flex justify-center mt-16'>
    <Stack spacing={2}>
      <MuiPagination count={24} shape="rounded" />
      
    </Stack>
    </div>
  );
}

export default CustomPagination;