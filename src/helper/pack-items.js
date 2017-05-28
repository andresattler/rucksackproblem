/* eslint comma-dangle: ["error", "never"]*/

export default (items, maxWeight) => {
  const sortedItems = [...Object.values(items)].sort((a, b) => b.valuePerWeight - a.valuePerWeight)

  function fillBackpack(backpack = [], currentWeight = 0, i = 0) {
    if (i + 1 <= sortedItems.length && currentWeight + sortedItems[i].weight <= maxWeight) {
      return fillBackpack(
        backpack.concat(sortedItems[i]),
        currentWeight + sortedItems[i].weight,
        i + 1
      )
    } else if (i + 1 < sortedItems.length && currentWeight <= maxWeight) {
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
