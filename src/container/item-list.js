import { connect } from 'react-redux'

import { toggleEditDialog, selectItem, changeValue, changeWeight } from '../action'

import ItemList from '../component/list'

const mapStateToProps = (state) => {
  const items = state.reducer.get('items')
  return { items: items.size === 0 ? [] : Object.values(items) }
}
const mapDispatchToProps = dispatch => ({
  handleClick: (target, value, weight) => {
    dispatch(selectItem(target))
    dispatch(toggleEditDialog())
    dispatch(changeValue(value))
    dispatch(changeWeight(weight))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
