export function battleHorde(zombies: string, humans: string): string {
  let battleResult = 0

  for (let i = 0; i < zombies.length; i++) {
    battleResult += zombies.charCodeAt(i) - humans.charCodeAt(i)
  }

  if (battleResult > 0) {
    return battleResult + "z"
  } else if (battleResult < 0) {
    return Math.abs(battleResult) + 'h'
  }

  return 'x'
}