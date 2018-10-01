import React from 'react'
import { AppRegistry } from 'react-native'
import AppContainer from './src/containers/AppContainer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './src/reducers'
import { name as appName } from './app.json'

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  })

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})
const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent(appName, () => App)
