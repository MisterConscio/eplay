import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import { useEffect, useState } from 'react'
import { Game } from '../Home'

const Products = () => {
  const { id } = useParams()
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <div>Carregando...</div>
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
