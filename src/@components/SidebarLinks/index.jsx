import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
function SidebarLinks({ links }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        m: 0,
        width: 200
      }}
    >
      {
        links.map(link => {
          return <Link key={link.id} to={`/categories/` + link.path}>{link.title}</Link>
        })
      }
    </Box>
  )
}

export default SidebarLinks