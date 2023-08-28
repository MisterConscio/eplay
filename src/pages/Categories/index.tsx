import ProductsList from '../../components/ProductsList'

import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categories = () => {
  const { isLoading: isActionLoading, data: actionGames } =
    useGetActionGameQuery()
  const { isLoading: isSportsLoading, data: sportsGames } =
    useGetSportsGameQuery()
  const { isLoading: isSimuLoading, data: simulationGames } =
    useGetSimulationGameQuery()
  const { isLoading: isFightLoading, data: fightGames } = useGetFightGameQuery()
  const { isLoading: isRpgLoading, data: rpgGames } = useGetRpgGameQuery()

  return (
    <>
      <ProductsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
        isLoading={isActionLoading}
      />
      <ProductsList
        id="sports"
        title="Esportes"
        background="gray"
        games={sportsGames}
        isLoading={isSportsLoading}
      />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulationGames}
        isLoading={isSimuLoading}
      />
      <ProductsList
        id="fight"
        title="Luta"
        background="gray"
        games={fightGames}
        isLoading={isFightLoading}
      />
      <ProductsList
        id="rpg"
        title="RPG"
        background="black"
        games={rpgGames}
        isLoading={isRpgLoading}
      />
    </>
  )
}

export default Categories
