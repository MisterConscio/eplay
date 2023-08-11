import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportsGames, setSportsGames] = useState<Game[]>([])
  const [simulationGames, setSimlulationGames] = useState<Game[]>([])
  const [fightGames, setFightGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportsGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimlulationGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpgGames(res))
  }, [])

  return (
    <>
      <ProductsList title="Ação" background="black" games={actionGames} />
      <ProductsList title="Esportes" background="gray" games={sportsGames} />
      <ProductsList
        title="Simulação"
        background="black"
        games={simulationGames}
      />
      <ProductsList title="Luta" background="gray" games={fightGames} />
      <ProductsList title="RPG" background="black" games={rpgGames} />
    </>
  )
}

export default Categories
