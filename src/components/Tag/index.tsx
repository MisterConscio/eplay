import styled from 'styled-components'
import { colors } from '../../styles'

export const Tagger = styled.div<Props>`
  display: inline-block;

  background-color: ${colors.green};
  color: ${colors.white};

  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;

  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
`

type Props = {
  size?: 'small' | 'big' | undefined
  children: string
}

const Tag = ({ size = 'small', children }: Props) => (
  <Tagger size={size}>{children}</Tagger>
)

export default Tag
