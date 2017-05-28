// @flow
function randomInt(max) {
  return Math.floor((Math.random() * max) + 1)
}

function generateItems(numberOfItems: number) {
  return [...Array(numberOfItems).keys()].reduce((obj, i) => {
    const value = randomInt(100)
    const weight = randomInt(15)
    // eslint-disable-next-line no-param-reassign
    obj[i] = { id: i, value, weight, valuePerWeight: value / weight }
    return obj
  }, {})
}

export default generateItems
