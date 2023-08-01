import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import residentEvil from '../../assets/images/resident.png'

const Products = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nibh
          vitae sapien consectetur molestie placerat vel dolor. Quisque dictum
          dui ac risus eleifend, a bibendum augue elementum. Donec vulputate dui
          a orci ornare posuere. Fusce rutrum felis in turpis rutrum, et gravida
          ex tristique. Nullam vitae iaculis odio. Nunc.{' '}
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <strong>Plataforma</strong>: PlayStation 5 <br />
          <strong>Desenvolvedor</strong>: Avalanche Software <br />
          <strong>Editora</strong>: Portkey Games <br />
          <strong>Idiomas</strong>: Português.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <Gallery name="Hogwarts" defaultCover={residentEvil} />
      </Section>
    </>
  )
}

export default Products
