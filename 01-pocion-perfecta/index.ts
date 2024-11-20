export function createMagicPotion (potions: number[], target: number) {
  const magicPotion = new Map<number, number>()

  for(let i = 0; i < potions.length; i++) {
    const powerNeed = target - potions[i]

     if (magicPotion.has(powerNeed)) {
      return [magicPotion.get(powerNeed), i]
    }

    magicPotion.set(potions[i], i)
  }

  return undefined
}