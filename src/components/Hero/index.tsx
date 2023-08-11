import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Game } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'
import { colors } from '../../styles'
import Button from '../Button'
import { priceFormat } from '../ProductsList'
import Tag, { Tagger } from '../Tag'

const Banner = styled.div`
  height: 480px;
  width: 100%;
  display: block;
  padding-top: 16px;

  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    content: '';
    opacity: 0.5;
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .container {
    z-index: 1;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
  }

  ${Tagger} {
    margin-right: 8px;
  }
`

const Infos = styled.div`
  background-color: ${colors.black};

  max-width: 290px;
  padding: 16px;

  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin-block: 16px;
  }
`

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>
                De <del>{priceFormat(game.prices.old)}</del>
                <br />
              </span>
            )}
            {game.prices.current && (
              <>
                Por {priceFormat(game.prices.current)}
                <Button
                  title="Adicionar jogo ao carrinho"
                  type="button"
                  variant="primary"
                  onClick={addToCart}
                >
                  Adicionar ao carrinho
                </Button>
              </>
            )}
          </p>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
