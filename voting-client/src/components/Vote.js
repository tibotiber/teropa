import React from 'react'
import PropTypes from 'prop-types'

const { arrayOf, string, func } = PropTypes

class Vote extends React.Component {
  constructor (props) {
    super(props)
    this.vote.bind(this)
  }

  vote (entry) {
    return e => {
      this.props.vote(entry)
    }
  }

  render () {
    const { pair = [], hasVoted } = this.props
    return (
      <div className='voting'>
        {pair.map(entry => (
          <button
            key={entry}
            disabled={!!hasVoted}
            className={hasVoted === entry ? 'voted' : ''}
            onClick={this.vote(entry)}
          >
            <h1>{entry}</h1>
            {hasVoted === entry && <div className='label'>Voted</div>}
          </button>
        ))}
      </div>
    )
  }
}

Vote.propTypes = {
  pair: arrayOf(string),
  hasVoted: string,
  vote: func
}

export default Vote
