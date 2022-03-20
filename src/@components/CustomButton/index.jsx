import React from 'react'
import Button from '@mui/material/Button'

function CustomButton({ children }) {
  return (
    <Button
      variant='contained'
    >
      {
        children
      }
    </Button>
  )
}

export default CustomButton