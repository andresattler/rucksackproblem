// @flow
import React from 'react'
import { List, ListItem } from 'material-ui/List'

type Props = {
  items: Array<{
    id: number,
    weight: number,
    value: number
  }>,
  handleClick: Function,
}

const ItemList = ({ items, handleClick }: Props) => (
  <List>
    {items.map((item, i) => (
      <ListItem
        value={item.id}
        key={item.id.toString()}
        primaryText={`id: ${item.id}
          weight: ${item.weight} kg
          value: ${item.value}€`}
        onTouchTap={() => handleClick(i)}
      />
    ))}
  </List>
)

export default ItemList
