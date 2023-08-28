import styled from 'styled-components'
import { Game } from '../../pages/Home'
import { breakpoints } from '../../styles'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'
import Product from '../Product'
import { Container } from '../Section'

const List = styled.ul`
  padding-left: 0;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    game.release_date && tags.push(game.release_date)
    game.prices.discount && tags.push(`${game.prices.discount}%`)
    game.prices.current && tags.push(parseToBrl(game.prices.current))

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games &&
            games.map((item) => (
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
