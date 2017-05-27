import { connect } from 'react-redux'

import { packBackpack, changeMaxWeight, maxWeightError } from '../action'

import MaxWeightTextField from '../component/max-weight-text-field'

const mapStateToProps = state => ({
  maxWeightErrorText: state.reducer.get('maxWeightErrorText'),
})

const mapDispatchToProps = dispatch => ({
  handleChange: (val) => {
    dispatch(changeMaxWeight(val))
    dispatch(packBackpack())
  },
  maxWeightError: () => dispatch(maxWeightError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MaxWeightTextField)
