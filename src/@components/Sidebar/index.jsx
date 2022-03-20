import React from 'react'
import Box from '@mui/material/Box'
function Sidebar({ children }) {
  return (

    <Box
      sx={{
        borderRight: '1px solid grey',
        p: 1,
        maxWidth: 280,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {
        children
      }
    </Box>


  )
}

export default Sidebar