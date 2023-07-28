import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'

const Products = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
    </>
  )
}

export default Products
