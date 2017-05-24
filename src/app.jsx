import React from 'react'
import Divider from 'material-ui/Divider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import GenerateRandomItemesButton from './container/generate-random-items-button'
import ItemList from './container/item-list'
import AddItemButton from './container/add-item-button'
import RemoveAllButton from './container/remove-all-button'
import EditDialog from './container/edit-dialog'
import BackpackList from './container/backpack-list'
import Summery from './container/summery'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const App = () =>
  <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <ItemList />
    <div>
      <AddItemButton />
      <RemoveAllButton />
    </div>
    <EditDialog />
    <GenerateRandomItemesButton />
    <BackpackList />
    <Divider />
    <Summery />
  </div>

export default App
