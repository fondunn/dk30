import React from 'react'
import TextField from '@mui/material/TextField'
function CustomInput({ data }) {
  return (
    <TextField
      id='outlined-basic'
      label={data.label}
      variant='outlined'
      size="small"
    />
  )
}

export default CustomInput