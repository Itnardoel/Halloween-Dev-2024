export function findSafestPath(dream: number[][]) {
  const dreamRows = dream.length;
  const dreamColumns = dream[0].length;

  const safestPath = <number[]>[];
  safestPath[0] = dream[0][0];

  for (let col = 1; col < dreamColumns; col++) {
    safestPath[col] = safestPath[col - 1] + dream[0][col];
  }

  for (let row = 1; row < dreamRows; row ++) {
    safestPath[0] += dream[row][0]

    for (let col = 1; col < dreamColumns; col ++) {
      let minValue = Math.min(safestPath[col - 1], safestPath[col])
      safestPath[col] = minValue + dream[row][col]
    }
  }

  return safestPath[dreamColumns - 1]
}