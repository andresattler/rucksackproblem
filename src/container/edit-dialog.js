import { connect } from 'react-redux'

import { toggleEditDialog, addItem } from '../action'

import EditDialog from '../component/edit-dialog'

const mapStateToProps = (state) => {
  const items = state.reducer.get('items')
  const index = state.reducer.get('selectedItemIndex')
  return {
    open: state.reducer.get('showEditDialog'),
    value: index > -1 ? items[index].value : undefined,
    weight: index > -1 ? items[index].weight : undefined,
  }
}

const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(toggleEditDialog()),
  handleSubmitt: () => {
    dispatch(addItem())
    dispatch(toggleEditDialog())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog)
