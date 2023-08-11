import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Head = styled.header`
  background-color: ${colors.grey};
  padding: 24px;
  border-radius: 16px;
  margin-block: 40px 80px;

  display: flex;
  align-items: center;
`

const Links = styled.ul`
  display: flex;
  padding-left: 0;
  margin-left: 40px;
`

const LinkItem = styled.li`
  margin-right: 16px;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`

const CartLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  a {
    cursor: pointer;
  }

  > * {
    margin-left: 16px;
  }

  span {
    font-weight: bold;
    color: ${colors.white};
  }
`

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Head>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
      <CartLinks>
        <span>{items.length} - produto(s)</span>
        <a onClick={openCart}>
          <img src={carrinho} alt="Carrinho" />
        </a>
      </CartLinks>
    </Head>
  )
}

export default Header
