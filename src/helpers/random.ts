// random id: string
import type { Cabinet, Item, RectConfig, Shelf, WithRect } from '@/domain-types.ts'
import type { RectConfig as KonvaRectConfig } from 'konva/lib/shapes/Rect'

export function randomId(): string {
  return Math.random().toString(36).substr(2, 9)
}

// random number between two numbers
export function randomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * minus N percent.
 * Subtracts N percent from a number
 * @param num
 * @param percent
 * @returns
 */
export function minusPercent(num: number, percent: number): number {
  return num - (num * percent) / 100
}

export const generateRandomCabinet = (
  name: string = '',
  width: number = 1000,
  height: number = 500,
): Cabinet => {
  return {
    id: randomId(),
    name: `Cabinet ${randomId()} ${name}`,
    shelves: [],
    x: randomNumberBetween(0, width),
    y: randomNumberBetween(0, height),
    width: randomNumberBetween(minusPercent(width, 90), minusPercent(width, 10)),
    height: randomNumberBetween(minusPercent(height, 90), minusPercent(height, 10)),
  }
}

export const generateRandomShelf = (name: string = '', boundary: Cabinet): Shelf => {
  return {
    id: randomId(),
    name: `Shelf ${randomId()} ${name}`,
    ...generateRectWithinRect(boundary),
    items: [],
  }
}

export const generateRandomItem = (name: string = '', shelf: Shelf): Item => {
  return {
    id: randomId(),
    name: `Item ${randomId()} ${name}`,
    description: `Description of item ${randomId()} ${name}`,
    ...generateRectWithinRect(shelf),
  }
}

/**
 * generate rect within rect.
 * so we have the rectangular type like this
 * @type RectConfig
 * {
 *   x: number,
 *   y: number,
 *   width: number,
 *   height: number,
 * }
 *
 * it generates a rect within a rect
 */
export const generateRectWithinRect = (rect: RectConfig): RectConfig => {
  // Generate random dimensions that are smaller than the parent
  const maxWidth = rect.width * 0.9 // Max 90% of parent width
  const minWidth = rect.width * 0.2 // Min 20% of parent width
  const maxHeight = rect.height * 0.9
  const minHeight = rect.height * 0.2

  const width = randomNumberBetween(minWidth, maxWidth)
  const height = randomNumberBetween(minHeight, maxHeight)

  // Generate random position ensuring the inner rect stays within bounds
  const x = randomNumberBetween(rect.x, rect.x + rect.width - width)
  const y = randomNumberBetween(rect.y, rect.y + rect.height - height)

  return { x, y, width, height }
}

export const useRandomData = () => {
  const generateRandomData = (width: number = 1000, height: number = 500) => {
    const cabinet = generateRandomCabinet('Cabinet 1', width, height)
    const shelves = Array.from({ length: randomNumberBetween(1, 5) }, () =>
      generateRandomShelf('', cabinet),
    )
    shelves.forEach(
      (shelf) =>
        (shelf.items = Array.from({ length: randomNumberBetween(1, 5) }, () =>
          generateRandomItem('', shelf),
        )),
    )
    cabinet.shelves = shelves
    return cabinet
  }
  return {
    generateRandomData,
  }
}

export const toKonvaRect = (
  rect: RectConfig,
  style?: Partial<KonvaRectConfig>,
): KonvaRectConfig => ({ x: rect.x, y: rect.y, width: rect.width, height: rect.height, ...style })

export const toKonvaCabinet = (cabinet: Cabinet): KonvaRectConfig => ({
  x: cabinet.x,
  y: cabinet.y,
  width: cabinet.width,
  height: cabinet.height,
  fill: '#2c3e50',
  stroke: '#1a252f',
  strokeWidth: 2,
})

export const toKonvaItem = (item: Item): KonvaRectConfig => ({
  x: item.x,
  y: item.y,
  width: item.width,
  height: item.height,
  fill: '#e74c3c',
  stroke: '#e67e22',
  draggable: true,
})

export const toKonvaShelf = (shelf: Shelf): KonvaRectConfig => ({
  x: shelf.x,
  y: shelf.y,
  width: shelf.width,
  height: shelf.height,
  fill: '#8b4513',
  stroke: '#5d2e0c',
  strokeWidth: 1,
})

/**
 * Cabinet to KonvaRectConfigs.
 * Takes a cabinet, draws cabinet rectangle, draws shelves rectangles, draws items rectangles.
 * @param Cabinet
 */
export const toKonvaCabinetWithItems = (cabinet: Cabinet): KonvaRectConfig[] => {
  const rects: KonvaRectConfig[] = []

  // Cabinet rectangle
  rects.push(toKonvaCabinet(cabinet))

  // Shelves and their items
  for (const shelf of cabinet.shelves) {
    rects.push(toKonvaShelf(shelf))

    for (const item of shelf.items) {
      rects.push(toKonvaItem(item))
    }
  }

  return rects
}
