export const vote = entry => ({
  type: 'VOTE',
  entry
})

export const setState = state => ({
  type: 'SET_STATE',
  state
})

export const next = state => ({
  type: 'NEXT'
})
