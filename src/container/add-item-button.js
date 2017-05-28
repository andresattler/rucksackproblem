import { connect } from 'react-redux'

import { selectItem, toggleEditDialog } from '../action'

import Button from '../component/button'

const mapStateToProps = state => ({
  label: 'Add item',
  index: state.generateDialogReducer.get('numberOfItems'),
})

const mapDispatchToProps = dispatch => ({
  handleClick: (index) => {
    dispatch(selectItem(index))
    dispatch(toggleEditDialog())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
