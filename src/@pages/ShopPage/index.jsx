import React from 'react'
import Sidebar from '@components/Sidebar'
import Container from '@mui/material/Container'
import PageContentHandler from '@components/PageContentHandler'
import SidebarFilters from '@components/SidebarFilters'
function ShopPage() {
  return (
    <Container
      sx={{
        display: 'flex'
      }}
    >
      <Sidebar>
        <SidebarFilters></SidebarFilters>
      </Sidebar>
      <PageContentHandler>
        Some content from ShopPage
      </PageContentHandler>
    </Container>
  )
}

export default ShopPage