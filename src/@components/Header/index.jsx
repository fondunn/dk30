import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomButton from '@components/CustomButton'
import ButtonGroup from '@mui/material/ButtonGroup'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          SHOP
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <ButtonGroup
            variant='contained'
            aria-label="outlined button group"

          >
            <Link to='/'>
              <CustomButton>
                Home
              </CustomButton>
            </Link>
            <Link to='/shop'>
              <CustomButton>
                Shop
              </CustomButton>
            </Link>
          </ButtonGroup>
        </Box>


        <Link to='/cart'>
          <CustomButton>
            Cart
          </CustomButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header