import React from 'react'
import PropTypes from 'prop-types'

const { string } = PropTypes

const Winner = ({ winner }) => (
  <div className='voting'>
    <button className='voted' disabled>
      <h1>The winner is {winner}!</h1>
    </button>
  </div>
)

Winner.propTypes = {
  winner: string
}

export default Winner
