import styled from 'styled-components'

import Button from '../Button'
import Tag, { Tagger } from '../Tag'

import { priceFormat } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Imagem = styled.div`
  display: block;

  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 560px;

  font-weight: bold;

  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    z-index: 1;
  }

  ${Tagger} {
    position: absolute;
    top: 32px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;
`

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <div>Carregando...</div>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <del>{priceFormat(game.prices.old)}</del> <br />
            por apenas {priceFormat(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Aproveitar a promoção"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
