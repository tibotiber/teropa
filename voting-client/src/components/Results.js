import React from 'react'
import PropTypes from 'prop-types'
import Winner from './Winner'

const { arrayOf, string, object, func } = PropTypes

const Results = ({ pair = [], tally = {}, next, winner }) =>
  (winner
    ? <Winner winner={winner} />
    : <div className='results'>
      <div className='tally'>
        {pair.map(entry => (
          <div key={entry} className='entry'>
            <h1>{entry}</h1>
            <div className='voteCount'>
              {tally[entry] || 0}
            </div>
          </div>
          ))}
      </div>
      <div className='management'>
        <button className='next' onClick={next}>
            Next
          </button>
      </div>
    </div>)

Results.propTypes = {
  pair: arrayOf(string),
  tally: object,
  next: func,
  winner: string
}

// temporary until redux is hooked
Results.defaultProps = {
  pair: ['Trainspotting', '28 Days Later'],
  tally: {
    Trainspotting: 5,
    '28 Days Later': 4
  }
}

export default Results
