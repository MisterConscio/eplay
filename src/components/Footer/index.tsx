import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { colors } from '../../styles'

const Container = styled.footer`
  background-color: ${colors.grey};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;

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
  flex-wrap: wrap;
  gap: 8px;
`

const FootLink = styled(HashLink)`
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
            <FootLink title="Acessar jogos de ação" to="/categories/#action">
              Ação
            </FootLink>
          </li>
          <li>
            <FootLink
              title="Acessar jogos de esportes"
              to="/categories/#sports"
            >
              Esportes
            </FootLink>
          </li>
          <li>
            <FootLink
              title="Acessar jogos de simulação"
              to="/categories/#simulation"
            >
              Simulação
            </FootLink>
          </li>
          <li>
            <FootLink title="Acessar jogos de luta" to="/categories/#fight">
              Luta
            </FootLink>
          </li>
          <li>
            <FootLink title="Acessar jogos de rpg" to="/categories/#rpg">
              RPG
            </FootLink>
          </li>
        </Links>
      </nav>
      <nav>
        <h4>Acesso Rápido</h4>
        <Links>
          <li>
            <FootLink title="Acessar jogos que sairão em breve" to="/#soon">
              Em Breve
            </FootLink>
          </li>
          <li>
            <FootLink title="Acessar jogos em promoção" to="/#on-sale">
              Promoções
            </FootLink>
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
