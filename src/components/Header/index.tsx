import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Head = styled.header`
  padding: 24px;
  border-radius: 16px;
  margin-block: 40px 80px;

  .mob-nav {
    display: none;

    &.is-open {
      display: block;
    }
  }

  background-color: ${colors.grey};
`

const Links = styled.ul`
  display: flex;
  padding-left: 0;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }

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

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;

    .cart-full-info {
      display: none;
    }
  }
`

const HambMenu = styled.div`
  width: 32px;

  span {
    display: block;
    height: 2px;
    width: 100%;
    margin-bottom: 4px;
    background: white;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
    justify-content: space-between;

    .main-nav {
      display: none;
    }
  }
`

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  const closeMobMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Head>
      <HeaderRow>
        <HambMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </HambMenu>
        <Link to="/">
          <img title="Acessar a home" src={logo} alt="EPLAY" />
        </Link>
        <nav className="main-nav">
          <Links>
            <LinkItem>
              <Link title="Acessar as categorias de jogos" to="/categories">
                Categorias
              </Link>
            </LinkItem>
            <LinkItem>
              <HashLink
                title="Acessar os jogos que sairão em breve"
                to="/#soon"
              >
                Em Breve
              </HashLink>
            </LinkItem>
            <LinkItem>
              <HashLink title="Acessar os jogos em promoção" to="/#on-sale">
                Promoções
              </HashLink>
            </LinkItem>
          </Links>
        </nav>
        <CartLinks>
          <span>
            {items.length}
            <span className="cart-full-info"> - produto(s)</span>
          </span>
          <a onClick={openCart}>
            <img src={carrinho} alt="Carrinho" />
          </a>
        </CartLinks>
      </HeaderRow>
      <nav className={isMenuOpen ? 'is-open mob-nav' : 'mob-nav'}>
        <Links>
          <LinkItem>
            <Link onClick={closeMobMenu} to="/categories">
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink onClick={closeMobMenu} to="/#soon">
              Em Breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink onClick={closeMobMenu} to="/#on-sale">
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </nav>
    </Head>
  )
}

export default Header
