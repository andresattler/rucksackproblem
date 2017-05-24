import { connect } from 'react-redux'

import { toggleEditDialog, editItem } from '../action'

import ItemList from '../component/list'

const mapStateToProps = state => ({
  items: state.reducer.get('items'),
})

const mapDispatchToProps = dispatch => ({
  handleClick: (target) => {
    dispatch(editItem(target))
    dispatch(toggleEditDialog())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
