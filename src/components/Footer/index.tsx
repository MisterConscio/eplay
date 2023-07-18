import styled from 'styled-components'
import { colors } from '../../styles'

const Container = styled.footer`
  background-color: ${colors.grey};
  padding: 32px 0;
  font-size: 14px;

  h4 {
    color: ${colors.white};
    font-size: 16px;
    margin-bottom: 8px;
  }

  nav {
    margin-bottom: 64px;
  }
`

const Links = styled.ul`
  padding-left: 0;

  display: flex;
  gap: 8px;
`

const Link = styled.a`
  text-decoration: none;
  color: ${colors.lightgrey};
  font-size: 14px;

  :hover {
    color: ${colors.green};
  }
`

const Footer = () => (
  <Container>
    <div className="container">
      <nav>
        <h4>Categorias</h4>
        <Links>
          <li>
            <Link href="#">RPG</Link>
          </li>
          <li>
            <Link href="#">Ação</Link>
          </li>
          <li>
            <Link href="#">Aventura</Link>
          </li>
          <li>
            <Link href="#">Esportes</Link>
          </li>
          <li>
            <Link href="#">Simulação</Link>
          </li>
          <li>
            <Link href="#">Estrategia</Link>
          </li>
          <li>
            <Link href="#">FPS</Link>
          </li>
        </Links>
      </nav>
      <nav>
        <h4>Acesso Rápido</h4>
        <Links>
          <li>
            <Link href="#">Novidades</Link>
          </li>
          <li>
            <Link href="#">Em Breve</Link>
          </li>
          <li>
            <Link href="#">Promoções</Link>
          </li>
        </Links>
      </nav>
      <p>
        {new Date().getFullYear()} - &copy; E-PLAY Nenhum dos direitos
        reservados
      </p>
    </div>
  </Container>
)

export default Footer
