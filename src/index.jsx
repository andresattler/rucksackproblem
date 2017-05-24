import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import App from './app'
import reducer from './reducer'

const store = createStore(combineReducers({ reducer }),
// eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const rootEl = document.getElementById('app')

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <AppContainer>
      <MuiThemeProvider>
        <AppComponent />
      </MuiThemeProvider>
    </AppContainer>
  </Provider>

)

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
