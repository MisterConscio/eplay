import styled from 'styled-components'
import { colors } from '../../styles'
import { Card } from '../Product'

//prettier-ignore
export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;

  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.grey};

  h2 {
    font-size: 18px;
    margin-bottom: 40px;
  }

  ${Card} {
    background-color: ${(props) =>
    props.background === 'black' ? colors.grey : colors.black};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

type Props = {
  title: string
  background: 'black' | 'gray' | undefined
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </Container>
)

export default Section
