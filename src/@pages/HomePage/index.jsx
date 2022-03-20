import React from 'react'

import Sidebar from '@components/Sidebar'
import PageContentHandler from '@components/PageContentHandler'
import SidebarLinks from '@components/SidebarLinks'
import PopularItemsContainer from '@components/PopularItemsContainer'

import { links } from '@helpers/data/links'
import Container from '@mui/material/Container'

function HomePage() {
  return (
    <Container
      sx={{
        display: 'flex'
      }}
    >
      <Sidebar>
        <SidebarLinks links={links} />
      </Sidebar>
      <PageContentHandler>
        <PopularItemsContainer />
      </PageContentHandler>
    </Container>
  )
}
export default HomePage