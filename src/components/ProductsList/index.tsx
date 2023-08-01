import styled from 'styled-components'
import { Game } from '../../pages/Home'
import Product from '../Product'
import { Container } from '../Section'

const List = styled.ul`
  padding-left: 0;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    game.release_date && tags.push(game.release_date)
    game.prices.discount && tags.push(`${game.prices.discount}%`)
    game.prices.current && tags.push(priceFormat(game.prices.current))

    return tags
  }

  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((item) => (
            <li key={item.id}>
              <Product
                category={item.details.category}
                title={item.name}
                system={item.details.system}
                desc={item.description}
                infos={getGameTags(item)}
                image={item.media.thumbnail}
                id={item.id}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
