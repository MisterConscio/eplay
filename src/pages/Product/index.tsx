import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import Section from '../../components/Section'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Products = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <strong>Plataforma</strong>: {game.details.system} <br />
          <strong>Desenvolvedor</strong>: {game.details.developer} <br />
          <strong>Editora</strong>: {game.details.publisher} <br />
          <strong>Idiomas</strong>: O jogo oferecee suporte a:{' '}
          {game.details.languages.join(', ')}.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <Gallery
          items={game.media.gallery}
          name={game.name}
          defaultCover={game.media.cover}
        />
      </Section>
    </>
  )
}

export default Products
