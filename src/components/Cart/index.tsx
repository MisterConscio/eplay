import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import styled from 'styled-components'

import { colors } from '../../styles'
import fechar from '../../assets/images/fechar.png'

import Button, { Btn } from '../Button'
import Tag, { Tagger } from '../Tag'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

const CartContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;

  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`

const SideBar = styled.aside`
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  .empty-cart {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: ${colors.white};
  }

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
    aspect-ratio: 1 / 1;
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
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeCartItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? `is-open` : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} height={80} />
                  <div className="cart-content">
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeCartItem(item.id)}
                  />
                </CartItem>
              ))}
            </ul>
            <p className="quantity">{items.length} jogo(s) no carrinho</p>
            <p className="prices">
              Total de {parseToBrl(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </p>
            <Button
              onClick={goToCheckout}
              title="Continuar com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-cart">
            O carrinho está vazio
            <br />
            <strong>Adicione algum item</strong> para proseguir
          </p>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
