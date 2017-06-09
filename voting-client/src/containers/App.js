import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'
import Voting from './Voting'
import Results from './Results'

const store = configureStore()

// temporary until socket hooked
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: { Sunshine: 2 }
    }
  }
})

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
