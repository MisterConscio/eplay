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
