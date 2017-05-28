// @flow
import React from 'react'
import { List, ListItem } from 'material-ui/List'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

type Props = {
  items: Array<{
    weight: number,
    value: number
  }>,
  editable: boolean,
  handleClick: Function,
  deleteItem: Function,
}

const ItemList = ({ items, editable, handleClick, deleteItem }: Props) => (
  <List style={{ backgroundColor: 'white', height: '35vh', width: '300px', overflowY: 'scroll' }}>
    {items.map((item, i) => (
      <ListItem
        style={{ backgroundColor: 'white' }}
        key={i.toString()}
        primaryText={`
          value: ${item.value}€
          weight: ${item.weight} kg`}
        rightIcon={editable ? <DeleteIcon /> : null}
        onTouchTap={(e) => {
          if (e.target.tagName === 'DIV') {
            return handleClick(item.id, item.value, item.weight)
          }
          return deleteItem(item.id)
        }}
      />
    ))}
  </List>
)


export default ItemList
