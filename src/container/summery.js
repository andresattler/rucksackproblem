import { connect } from 'react-redux'

import Summery from '../component/summery'

const mapStateToProps = state => ({
  items: state.reducer.get('backpack'),
})

export default connect(mapStateToProps)(Summery)
