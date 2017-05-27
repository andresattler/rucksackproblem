import { connect } from 'react-redux'

import { toggleGenerateDialog } from '../action'

import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Generate random items',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(toggleGenerateDialog())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
