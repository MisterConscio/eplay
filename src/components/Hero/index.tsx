import styled from 'styled-components'
import bannerImg from '../../assets/images/fundo_hogwarts.png'
import { colors } from '../../styles'
import Button from '../Button'
import Tag, { Tagger } from '../Tag'

const Banner = styled.div`
  height: 480px;
  width: 100%;
  display: block;
  padding-top: 16px;

  position: relative;

  background-image: url(${bannerImg});
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

const Hero = () => {
  return (
    <Banner>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            De <del>R$250,00</del>
            <br />
            Por R$ 190,00
          </p>
          <Button
            title="Adicionar jogo ao carrinho"
            type="button"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
