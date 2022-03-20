import React from 'react'
import PageContentHandler from '@components/PageContentHandler'

import { Link } from 'react-router-dom'

import { products } from '@helpers/data/products'
import { getCategories } from '@helpers/functions/getCategories'

function CategoriesPage() {
  const categories = getCategories(products)
  return (
    <PageContentHandler>
      {
        categories.map(category => {
          return <Link to={`/shop/` + category}>{category}</Link>
        })
      }
    </PageContentHandler>
  )
}

export default CategoriesPage