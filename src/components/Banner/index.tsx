import styled from 'styled-components'

import banner from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'
import Tag, { Tagger } from '../Tag'

const Imagem = styled.div`
  display: block;

  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 560px;
  padding-top: 340px;

  font-weight: bold;

  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${Tagger} {
    position: absolute;
    top: 32px;
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

const Banner = () => (
  <Imagem>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Siper-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <del>R$ 250,00</del> <br />
          por apenas R$ 99,90
        </Precos>
      </div>
      <Button type="link" to="/produto" title="Aproveitar a promoção">
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
