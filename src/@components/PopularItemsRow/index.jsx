import React from 'react'
import CardItem from '@components/CardItem'
import { getFavorites } from '@helpers/functions/getFavorites';
import { getItems } from '@helpers/functions/getItems'

import Grid from '@mui/material/Grid'

import { products } from '@helpers/data/products'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

function PopularItemsRow({ title = '' }) {
  const favProducts = getFavorites(products, title)
  const fourFavItems = getItems(favProducts, 4)
  return (
    <Container>
      <Typography
        variant='h5'
        component='div'
        sx={{
          mt: 2
        }}>Popular {title}</Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 2,
          lg: 1
        }}
        sx={{
          mt: 2,
        }}
        spacing={2}
      >

        {
          fourFavItems.map(product => {
            if (product.category === title) {
              return (
                <Grid key={product.id} item>
                  <CardItem key={product.id} data={product} />
                </Grid>)
            }
          })
        }
      </Grid>
    </Container>
  )
}

export default PopularItemsRow