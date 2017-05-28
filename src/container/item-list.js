import { connect } from 'react-redux'

import { toggleEditDialog, selectItem, changeValue, changeWeight, deleteItem, packBackpack } from '../action'

import ItemList from '../component/list'

const mapStateToProps = (state) => {
  const items = state.reducer.get('items')
  return {
    items: items.size === 0 ? [] : Object.values(items),
    editable: true,
  }
}
const mapDispatchToProps = dispatch => ({
  handleClick: (target, value, weight) => {
    dispatch(selectItem(target))
    dispatch(toggleEditDialog())
    dispatch(changeValue(value))
    dispatch(changeWeight(weight))
  },
  deleteItem: (id) => {
    dispatch(deleteItem(id))
    dispatch(packBackpack())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
