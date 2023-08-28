import { Game } from '../pages/Home'

export const parseToBrl = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((sum, current) => {
    if (current.prices.current) {
      return (sum += current.prices.current)
    }
    return 0
  }, 0)
}
