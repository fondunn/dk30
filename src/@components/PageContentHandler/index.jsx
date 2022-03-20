import React from 'react'
import Container from '@mui/material/Container'
function PageContentHandler({ children }) {
  return (
    <Container>
      {
        children
      }
    </Container>
  )
}

export default PageContentHandler