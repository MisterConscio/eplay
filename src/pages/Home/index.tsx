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
