import { Map } from 'immutable'

const setState = (state, newState) => state.merge(newState)

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    default:
      return state
  }
}

export default reducer
