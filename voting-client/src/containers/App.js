import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Voting from '../components/Voting'
import Results from '../components/Results'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Voting} />
      <Route path='/results' component={Results} />
    </div>
  </Router>
)

export default App
