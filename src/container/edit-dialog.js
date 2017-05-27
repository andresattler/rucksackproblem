import { connect } from 'react-redux'

import { toggleEditDialog, editItem, changeValue, changeWeight, typeError, packBackpack } from '../action'

import EditDialog from '../component/edit-dialog'

const mapStateToProps = (state) => {
  const items = state.reducer.get('items')
  const index = state.editDialogReducer.get('selectedItemIndex')
  return {
    open: state.editDialogReducer.get('showEditDialog'),
    initialValue: index > -1 ? items[index].value : undefined,
    initialWeight: index > -1 ? items[index].weight : undefined,
    index,
    weight: state.editDialogReducer.get('weight'),
    value: state.editDialogReducer.get('value'),
    weightError: state.editDialogReducer.get('weightError'),
    valueError: state.editDialogReducer.get('valueError'),
  }
}

const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(toggleEditDialog()),
  handleSubmit: (data) => {
    dispatch(editItem(data))
    dispatch(toggleEditDialog())
    dispatch(packBackpack())
  },
  changeValue: value => dispatch(changeValue(value)),
  changeWeight: weight => dispatch(changeWeight(weight)),
  typeError: type => dispatch(typeError(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog)
