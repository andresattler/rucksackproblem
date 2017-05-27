import React from 'react'

import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import injectTapEventPlugin from 'react-tap-event-plugin'


import GenerateRandomItemesButton from './container/generate-random-items-button'
import ItemList from './container/item-list'
import AddItemButton from './container/add-item-button'
import RemoveAllButton from './container/remove-all-button'
import EditDialog from './container/edit-dialog'
import GenerateDialog from './container/generate-dialog'
import BackpackList from './container/backpack-list'
import Summery from './container/summery'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const App = () =>
  <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Paper style={{ padding: '15px' }} zDepth={3}>
      <ItemList />
      <div style={{ textAlign: 'center' }}>
        <AddItemButton />
        <RemoveAllButton />
        <br />
        <GenerateRandomItemesButton />
      </div>
      <EditDialog />
      <GenerateDialog />
      <BackpackList />
      <Divider />
      <Summery />
    </Paper>
  </div>

export default App
