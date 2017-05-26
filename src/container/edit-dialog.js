import { connect } from 'react-redux'

import { toggleEditDialog, editItem, changeValue, changeWeight, typeError, packBackpack } from '../action'

import EditDialog from '../component/edit-dialog'

const mapStateToProps = (state) => {
  const items = state.reducer.get('items')
  const index = state.dialogReducer.get('selectedItemIndex')
  return {
    open: state.dialogReducer.get('showEditDialog'),
    initialValue: index > -1 ? items[index].value : undefined,
    initialWeight: index > -1 ? items[index].weight : undefined,
    index,
    weight: state.dialogReducer.get('weight'),
    value: state.dialogReducer.get('value'),
    weightError: state.dialogReducer.get('weightError'),
    valueError: state.dialogReducer.get('valueError'),
  }
}

const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(toggleEditDialog()),
  handleSubmitt: (data) => {
    dispatch(editItem(data))
    dispatch(toggleEditDialog())
    dispatch(packBackpack())
  },
  changeValue: value => dispatch(changeValue(value)),
  changeWeight: weight => dispatch(changeWeight(weight)),
  typeError: type => dispatch(typeError(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog)
