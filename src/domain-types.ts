export type RectConfig = {
  x: number
  y: number
  width: number
  height: number
}

export type Item = RectConfig & {
  id: string
  name: string
  description: string
}

export type Shelf = RectConfig & {
  id: string
  name: string
  items: Item[]
}

export type Cabinet = RectConfig & {
  id: string
  name: string
  shelves: Shelf[]
}

export type WithRect<T extends RectConfig = RectConfig> = T
