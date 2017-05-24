import { connect } from 'react-redux'

import ItemList from '../component/list'

const mapStateToProps = state => ({
  items: state.reducer.get('backpack'),
})

export default connect(mapStateToProps)(ItemList)
