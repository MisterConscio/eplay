import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'
import startwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 0,
    category: 'Ação',
    title: 'Resident Evil 4',
    system: 'PS5',
    desc: 'Souless remake',
    infos: ['Bruh', 'Yeh'],
    image: resident
  },
  {
    id: 1,
    category: 'Aventura',
    title: 'The Legend of Zelda',
    system: 'Nintendo Switch',
    desc: 'Breath of the Wild 2.0',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 2,
    category: 'RPG',
    title: 'Diablo 4',
    system: 'PC',
    desc: 'Never played this',
    infos: ['10%', 'God'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    title: 'Jedi Survivor',
    system: 'PS5',
    desc: 'Another Star Wars game',
    infos: ['17/05'],
    image: startwars
  }
]

const Categories = () => (
  <>
    <ProductsList title="RPG" background="gray" games={promocoes} />
    <ProductsList title="Ação" background="black" games={promocoes} />
    <ProductsList title="FPS" background="gray" games={promocoes} />
    <ProductsList title="Aventura" background="black" games={promocoes} />
  </>
)

export default Categories
