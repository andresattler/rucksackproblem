// @flow
import React from 'react'

const Summery = ({ items }: list) => {
  const weight = items.map(item => item.weight).reduce((total, current) => total + current)
  const value = items.map(item => item.value).reduce((total, current) => total + current)
  return <p>{`Sum weight: ${weight} kg Sum value: ${value}€`}</p>
}
export default Summery
