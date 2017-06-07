import React from 'react'
import PropTypes from 'prop-types'
import Winner from './Winner'
import Vote from './Vote'

const { string } = PropTypes

const Voting = ({ winner, ...props }) =>
  (winner ? <Winner winner={winner} /> : <Vote {...props} />)

Voting.propTypes = {
  winner: string
}

export default Voting
