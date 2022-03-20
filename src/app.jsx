import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@components/Header'

import HomePage from '@pages/HomePage'
import ShopPage from '@pages/ShopPage'
import CategoriesPage from '@pages/CategoriesPage'
import NotFoundPage from '@pages/NotFoundPage'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App