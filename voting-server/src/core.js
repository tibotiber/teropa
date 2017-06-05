import { List, Map } from 'immutable'

export const setEntries = (state, entries) => {
  return state.set('entries', List(entries))
}

const getWinners = vote => {
  if (!vote) return []
  const [a, b] = vote.get('pair')
  const aScore = vote.getIn(['tally', a], 0)
  const bScore = vote.getIn(['tally', b], 0)
  if (aScore > bScore) return [a]
  if (bScore > aScore) return [b]
  return [a, b]
}

export const next = state => {
  const entries = state.get('entries').concat(getWinners(state.get('vote')))
  if (entries.size === 1) {
    return state
      .remove('vote')
      .remove('entries')
      .set('winner', entries.first())
  }
  return state.merge({
    vote: Map({ pair: entries.take(2) }),
    entries: entries.skip(2)
  })
}

export const vote = (state, entry) => {
  return state.updateIn(['vote', 'tally', entry], (score = 0) => score + 1)
}
