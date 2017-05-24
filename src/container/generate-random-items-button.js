import { connect } from 'react-redux'

import { generateRandomItems, packBackpack } from '../action'

import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Generate random items',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(generateRandomItems())
    dispatch(packBackpack())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
