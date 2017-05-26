// @flow
import React from 'react'
import { List, ListItem } from 'material-ui/List'

type Props = {
  items: Array<{
    weight: number,
    value: number
  }>,
  handleClick: Function,
}

const ItemList = ({ items, handleClick }: Props) => (
  <List style={{ backgroundColor: 'white', height: '35vh', width: '300px', overflowY: 'scroll' }}>
    {items.map((item, i) => (
      <ListItem
        style={{ backgroundColor: 'white', textAlign: 'center' }}
        key={i.toString()}
        primaryText={`${i}.
          value: ${item.value}€
          weight: ${item.weight} kg`}
        onTouchTap={() => handleClick(i, item.value, item.weight)}
      />
    ))}
  </List>
)

export default ItemList
