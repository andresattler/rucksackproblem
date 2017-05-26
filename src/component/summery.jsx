// @flow
import React from 'react'

type Props = {
  items: Array<{
    id: number,
    weight: number,
    value: number
  }>
}
const Summery = ({ items }: Props) => {
  if (items.length > 0) {
    const weight = items.map(item => item.weight).reduce((total, current) => total + current)
    const value = items.map(item => item.value).reduce((total, current) => total + current)
    return <p>{`Max value: ${value}€ | Max weight: ${weight} kg`}</p>
  }
  return null
}
export default Summery
