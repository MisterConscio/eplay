import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Categories from './pages/Categories'
import Home from './pages/Home'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Pages
