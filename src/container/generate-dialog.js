import { connect } from 'react-redux'

import { generateRandomItems, packBackpack, toggleGenerateDialog, changeNumberOfItems, numberError } from '../action'

import GenerateDialog from '../component/generate-dialog'

const mapStateToProps = state => ({
  open: state.generateDialogReducer.get('showGenerateDialog'),
  numberOfItems: state.generateDialogReducer.get('numberOfItems'),
  error: state.generateDialogReducer.get('error'),
})


const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(toggleGenerateDialog()),
  handleSubmit: (val) => {
    dispatch(generateRandomItems(val))
    dispatch(packBackpack())
    dispatch(toggleGenerateDialog())
  },
  handleChange: val => dispatch(changeNumberOfItems(val)),
  numberError: () => dispatch(numberError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GenerateDialog)
