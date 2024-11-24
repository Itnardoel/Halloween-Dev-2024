export function escapePyramidHead(room: string[][]) {
  const roomLength = room.length

  // Location of Pyramid Head '▲'
  const initialPyramidX = room.findIndex(tile => tile.includes('▲'))
  const initialPyramidY = room[initialPyramidX].indexOf('▲')

  // Location of You 'T'
  const youX = room.findIndex(tile => tile.includes('T'))
  const youY = room[youX].indexOf('T')

  // Posible movements
  const movements = {
    UP: [-1, 0],
    RIGHT: [0, 1],
    DOWN: [1, 0],
    LEFT: [0, -1]
  }

  // Queue init with initial position of '▲'
  const queue = [[initialPyramidX, initialPyramidY, 0]]

  while (queue.length > 0) {
    const [pyramidX, pyramidY, steps] = queue.shift()!

    if (pyramidX === youX && pyramidY === youY) return steps

    for (let move in movements) {
      const [dx, dy] = movements[move as keyof typeof movements]

      const newX = pyramidX + dx
      const newY = pyramidY + dy

      const canMoveInX = newX >= 0 && newX <= roomLength - 1 
      const canMoveInY = newY >= 0 && newY <= roomLength - 1 

      if (canMoveInX && canMoveInY && room[newX][newY] !== '#') {
        room[pyramidX][pyramidY] = '#'
        queue.push([newX, newY, steps + 1])
      }
    }
  }
  return -1
}