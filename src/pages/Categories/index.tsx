import ProductsList from '../../components/ProductsList'

import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGameQuery()
  const { data: sportsGames } = useGetSportsGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()
  const { data: fightGames } = useGetFightGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()

  if (
    !actionGames ||
    !sportsGames ||
    !simulationGames ||
    !fightGames ||
    !rpgGames
  ) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <ProductsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
      />
      <ProductsList
        id="sports"
        title="Esportes"
        background="gray"
        games={sportsGames}
      />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulationGames}
      />
      <ProductsList
        id="fight"
        title="Luta"
        background="gray"
        games={fightGames}
      />
      <ProductsList id="rpg" title="RPG" background="black" games={rpgGames} />
    </>
  )
}

export default Categories
