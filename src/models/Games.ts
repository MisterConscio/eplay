class Game {
  category: string
  title: string
  system: string
  desc: string
  infos: string[]
  image: string
  id: number

  constructor(
    category: string,
    title: string,
    system: string,
    desc: string,
    infos: string[],
    image: string,
    id: number
  ) {
    this.category = category
    this.title = title
    this.system = system
    this.desc = desc
    this.infos = infos
    this.image = image
    this.id = id
  }
}

export default Game
