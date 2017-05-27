/* eslint comma-dangle: ["error", "never"]*/

export default (items, maxWeight) => {
  const sortedItems = [...Object.values(items)].sort((a, b) => b.valuePerWeight - a.valuePerWeight)
  function fillBackpack(backpack = [], currentWeight = 0, i = -1) {
    if (currentWeight + sortedItems[i + 1].weight < maxWeight && i + 2 < sortedItems.length) {
      return fillBackpack(
        backpack.concat(sortedItems[i + 1]),
        currentWeight + sortedItems[i + 1].weight,
        i + 1
      )
    } else if (currentWeight < maxWeight && i + 2 < sortedItems.length) {
      return fillBackpack(
        backpack,
        currentWeight,
        i + 1
      )
    }
    return backpack
  }
  return fillBackpack()
}
