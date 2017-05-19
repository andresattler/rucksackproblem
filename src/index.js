const maxWeight = 15

function randomInt(max) {
  return Math.floor((Math.random() * max) + 1)
}

function generateItems(numberOfItems) {
  return Array.from(new Array(numberOfItems), (val, i) => (
     { id: i, weight: randomInt(15), value: randomInt(100) }
  ))
}

const items = generateItems(8).map(item =>
  // eslint-disable-next-line comma-dangle
  Object.assign(item, { valuePerWeight: item.value / item.weight })
)

const sortedItems = items.sort((a, b) => b.valuePerWeight - a.valuePerWeight)

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

// const res = fillBackpack()
// const maxValue = res.map(item => item.value).reduce((total, value) => total + value)
// eslint-disable-next-line no-console
console.log(items, fillBackpack())
