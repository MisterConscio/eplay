import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonQuery()

  if (promocoes && emBreve) {
    return (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" games={promocoes} />
        <ProductsList title="Em Breve" background="black" games={emBreve} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
