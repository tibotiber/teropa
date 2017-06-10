import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
import Voting from './Voting'
import Results from './Results'

const store = configureStore()

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
