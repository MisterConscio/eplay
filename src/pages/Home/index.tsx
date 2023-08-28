import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: promocoes, isLoading: isSaleLoading } = useGetOnSaleQuery()
  const { data: emBreve, isLoading: isSoonLoading } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        title="Promoções"
        background="gray"
        games={promocoes}
        isLoading={isSaleLoading}
      />
      <ProductsList
        id="soon"
        title="Em Breve"
        background="black"
        games={emBreve}
        isLoading={isSoonLoading}
      />
    </>
  )
}

export default Home
