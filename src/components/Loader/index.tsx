import { PacmanLoader } from 'react-spinners'
import styled from 'styled-components'
import { colors } from '../../styles'

const Container = styled.div`
  min-height: 360px;

  display: flex;
  place-content: center;
`

export default function Loader() {
  return (
    <Container>
      <PacmanLoader color={colors.white} />
    </Container>
  )
}
