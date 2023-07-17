import { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'

const Btn = styled.button`
  border: 2px solid ${colors.white};
  border-radius: 8px;
  padding: 8px 16px;

  background-color: transparent;
  color: ${colors.white};

  font-size: 16px;
  font-weight: bold;
`

const BtnLink = styled(Link)`
  border: 2px solid ${colors.white};
  border-radius: 8px;
  padding: 8px 16px;

  background-color: transparent;
  color: ${colors.white};

  font-size: 16px;
  font-weight: bold;

  text-decoration: none;
`

type Props = {
  type: 'button' | 'link' | undefined
  title: string
  children: string
  to?: string
  onClick?: MouseEventHandler
}

const Button = ({ type = 'button', title, children, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <Btn onClick={onClick} title={title}>
        {children}
      </Btn>
    )
  } else {
    return (
      <BtnLink to={to as string} title={title}>
        {children}
      </BtnLink>
    )
  }
}

export default Button
