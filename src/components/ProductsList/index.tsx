import styled from 'styled-components'
import Game from '../../models/Games'
import Product from '../Product'
import { Container } from '../Section'

type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const List = styled.ul`
  padding-left: 0;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
`

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((item) => (
          <li key={item.id}>
            <Product
              category={item.category}
              title={item.title}
              system={item.system}
              desc={item.desc}
              infos={item.infos}
              image={item.image}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
