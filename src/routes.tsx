import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Products from './pages/Product'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Products />} />
  </Routes>
)

export default Pages
