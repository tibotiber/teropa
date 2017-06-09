/* global location */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import configureStore from '../store'
import Voting from './Voting'
import Results from './Results'

const store = configureStore()

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state => store.dispatch({ type: 'SET_STATE', state }))

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Voting} />
        <Route path='/results' component={Results} />
      </div>
    </Router>
  </Provider>
)

export default App
