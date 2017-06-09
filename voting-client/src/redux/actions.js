export const vote = entry => ({
  type: 'VOTE',
  meta: { remote: true },
  entry
})

export const setState = state => ({
  type: 'SET_STATE',
  state
})

export const next = state => ({
  type: 'NEXT',
  meta: { remote: true }
})
