import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const pair = ['Trainspotting', '28 Days Later']

ReactDOM.render(<Voting pair={pair} />, document.getElementById('root'))

registerServiceWorker()
