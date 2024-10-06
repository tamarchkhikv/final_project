import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';




const MuiBreadcrumbs = () => {
  return (
    <div className='max-w-[1116px] mx-auto '>
      <Box m={2} >
        <Breadcrumbs
          aria-label='breadcrumbs'
          separator={<NavigateNextIcon fontSize='small' />}

        >
          <Link underline='none' href='#' color='text.secondary'>Ecommerce</Link>

          <Typography color='text.primary' fontWeight='Medium'>Black man t-shirt</Typography>
        </Breadcrumbs>

      </Box>
    </div>
  )

}
export default MuiBreadcrumbs;