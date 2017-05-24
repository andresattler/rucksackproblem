import { connect } from 'react-redux'

import { removeAll } from '../action'

import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Remove all',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(removeAll())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
