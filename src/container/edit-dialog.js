import { connect } from 'react-redux'

import { toggleEditDialog, editItem, changeValue, changeWeight, changeNumberOfItems, typeError, packBackpack } from '../action'

import EditDialog from '../component/edit-dialog'

const mapStateToProps = (state) => {
  const items = state.reducer.get('items')
  const index = state.editDialogReducer.get('selectedItemIndex')
  const length = items.size === 0 ? 0 : Object.keys(items).length
  return {
    open: state.editDialogReducer.get('showEditDialog'),
    initialValue: index < length && index > -1 ? items[index].value : '',
    initialWeight: index < length && index > -1 ? items[index].weight : '',
    index,
    weight: state.editDialogReducer.get('weight'),
    value: state.editDialogReducer.get('value'),
    weightError: state.editDialogReducer.get('weightError'),
    valueError: state.editDialogReducer.get('valueError'),
    newLength: index < length ? length : length + 1,
  }
}

const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(toggleEditDialog()),
  handleSubmit: (data, newLength) => {
    dispatch(editItem(data))
    dispatch(changeNumberOfItems(newLength))
    dispatch(toggleEditDialog())
    dispatch(packBackpack())
  },
  changeValue: value => dispatch(changeValue(value)),
  changeWeight: weight => dispatch(changeWeight(weight)),
  typeError: type => dispatch(typeError(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog)
