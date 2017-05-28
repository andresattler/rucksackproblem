import { connect } from 'react-redux'

import { removeAll, changeNumberOfItems } from '../action'

import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Remove all',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(removeAll())
    dispatch(changeNumberOfItems(0))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
