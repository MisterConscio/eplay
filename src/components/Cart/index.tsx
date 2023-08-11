import styled from 'styled-components'

import { colors } from '../../styles'
import fechar from '../../assets/images/fechar.png'

import Button, { Btn } from '../Button'
import Tag, { Tagger } from '../Tag'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`

const CartContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`

const SideBar = styled.aside`
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${Btn} {
    max-with: 100%;
    width: 100%;
  }

  background-color: ${colors.grey};

  .quantity {
    font-weight: bold;
    font-size: 16px;
    color: ${colors.white};
    margin-block: 32px 16px;
  }

  .prices {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
    margin-bottom: 24px;

    span {
      display: block;
      font-size: 12px;
      color: ${colors.white};
    }
  }
`

const CartItem = styled.li`
  display: flex;
  gap: 24px;
  padding-block: 8px;
  border-bottom: 1px solid ${colors.lightgrey};
  position: relative;

  img {
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 8px;
    right: 8px;

    background-image: url(${fechar});
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;

    width: 16px;
    aspect-ratio: 1 / 1;

    cursor: pointer;
  }

  .cart-content {
    h3 {
      color: white;
      font-size: 16px;
    }

    span {
      font-weight: bold;
      display: block;
      font-size: 14px;
      color: ${colors.white};
    }

    ${Tagger} {
      margin-right: 8px;
      margin-block: 8px 16px;
    }
  }
`

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
        <ul>
          <CartItem>
            <img src="https://placehold.it/80" alt="thumb" />
            <div className="cart-content">
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src="https://placehold.it/80" alt="thumb" />
            <div className="cart-content">
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <p className="quantity">2 jogo(s) no carrinho</p>
        <p className="prices">
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </p>
        <Button title="Continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
