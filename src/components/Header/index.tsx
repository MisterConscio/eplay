import styled from 'styled-components'
import { colors } from '../../styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Head = styled.header`
  background-color: ${colors.grey};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

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

  > * {
    margin-left: 16px;
  }

  span {
    font-weight: bold;
    color: ${colors.white};
  }
`

const Header = () => (
  <Head>
    <img src={logo} alt="EPLAY" />
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Categorias</a>
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
      <span>0 - produto(s)</span>
      <a href="#">
        <img src={carrinho} alt="Carrinho" />
      </a>
    </CartLinks>
  </Head>
)

export default Header
