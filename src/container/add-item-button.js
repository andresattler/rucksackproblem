import { connect } from 'react-redux'

import { toggleEditDialog, packBackpack } from '../action'

import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Add item',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(toggleEditDialog())
    dispatch(packBackpack())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
