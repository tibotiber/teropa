import React from 'react'
import PropTypes from 'prop-types'

const { arrayOf, string } = PropTypes

const Voting = ({ pair = [] }) => (
  <div className='voting'>
    {pair.map(entry => (
      <button key={entry}>
        <h1>{entry}</h1>
      </button>
    ))}
  </div>
)

Voting.propTypes = {
  pair: arrayOf(string)
}

export default Voting
