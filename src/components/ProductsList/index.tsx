import styled from 'styled-components'
import Game from '../../models/Games'
import { colors } from '../../styles'
import Product, { Card } from '../Product'

const List = styled.ul`
  padding-left: 0;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
`

//prettier-ignore
const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;

  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.grey};

  h2 {
    font-size: 18px;
  }

  ${Card} {
    background-color: ${(props) =>
    props.background === 'black' ? colors.grey : colors.black};
  }
`

type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

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
