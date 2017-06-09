import { Map } from 'immutable'

const setState = (state, newState) => state.merge(newState)

const resetVote = state => {
  if (!state.getIn(['vote', 'pair']).includes(state.get('hasVoted'))) {
    return state.delete('hasVoted')
  }
  return state
}

const vote = (state, entry) => {
  if (state.getIn(['vote', 'pair']).includes(entry)) {
    return state.set('hasVoted', entry)
  } else {
    return state
  }
}

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state))
    case 'VOTE':
      return vote(state, action.entry)
    default:
      return state
  }
}

export default reducer
