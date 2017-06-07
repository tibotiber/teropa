import React from 'react'
import PropTypes from 'prop-types'

const { string } = PropTypes

const Winner = ({ winner }) => (
  <button className='voted' disabled>
    <h1>The winner is {winner}!</h1>
  </button>
)

Winner.propTypes = {
  winner: string
}

export default Winner
