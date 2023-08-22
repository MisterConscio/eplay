import styled from 'styled-components'
import { colors } from '../../styles'

const Container = styled.div`
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  .mg-top-2 {
    margin-top: 24px;
  }

  background-color: ${colors.grey};
`

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}

export default Card
