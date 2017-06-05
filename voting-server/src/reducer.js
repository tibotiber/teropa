import { INITIAL_STATE, setEntries, next, vote } from './core'

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries)
    case 'NEXT':
      return next(state)
    case 'VOTE':
      return state.update('vote', stateSlice => vote(stateSlice, action.entry))
    default:
      return state
  }
}

export default reducer
