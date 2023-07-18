import styled from 'styled-components'
import { colors } from '../../styles'
import Tag, { Tagger } from '../Tag'

export const Card = styled.div`
  background-color: ${colors.grey};

  padding: 8px;
  border-radius: 8px;

  position: relative;

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
}

const Product = ({ title, category, system, desc, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div className="infos">
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </div>
    <h3>{title}</h3>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <p>{desc}</p>
  </Card>
)

export default Product
