function randomInt(max) {
  return Math.floor((Math.random() * max) + 1)
}

function generateItems(numberOfItems) {
  return Array.from(new Array(numberOfItems), (val, i) => (
     { id: i, weight: randomInt(15), value: randomInt(100) }
  )).map(item => ({ ...item, valuePerWeight: item.value / item.weight }))
}

export default generateItems
