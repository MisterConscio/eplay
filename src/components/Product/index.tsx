import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'
import Tag, { Tagger } from '../Tag'

export const Card = styled(Link)`
  background-color: ${colors.grey};

  padding: 8px;
  border-radius: 8px;

  position: relative;
  height: 100%;

  text-decoration: none;
  color: ${colors.white};
  display: block;

  img {
    object-fit: cover;
    width: 100%;
    height: 250px;
  }

  h3 {
    font-size: 16px;
    margin-block: 16px 8px;
  }

  ${Tagger} {
    margin-right: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  .infos {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`

type Props = {
  title: string
  category: string
  system: string
  desc: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  desc,
  infos,
  image,
  id
}: Props) => {
  const getDesc = (desc: string) => {
    if (desc.length > 95) {
      return desc.slice(0, 92) + '...'
    }
    return desc
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <div className="infos">
        {infos.map((info, index) => (
          <Tag key={index}>{info}</Tag>
        ))}
      </div>
      <h3>{title}</h3>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <p>{getDesc(desc)}</p>
    </Card>
  )
}

export default Product
