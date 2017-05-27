// @flow
function randomInt(max) {
  return Math.floor((Math.random() * max) + 1)
}

function generateItems(numberOfItems: number) {
  return [...Array(numberOfItems).keys()].reduce((obj, i) => {
    const weight = randomInt(15)
    const value = randomInt(100)
    // eslint-disable-next-line no-param-reassign
    obj[i] = { weight, value, valuePerWeight: value / weight }
    return obj
  }, {})
}

export default generateItems
