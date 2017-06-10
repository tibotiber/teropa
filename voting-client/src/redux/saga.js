/* global location */
import io from 'socket.io-client'
import { eventChannel } from 'redux-saga'
import { all, takeEvery, put, take, call } from 'redux-saga/effects'
import { setState } from '../redux/actions'

function createSocketChannel (socket) {
  return eventChannel(emit => {
    const handleState = state => emit(state)
    socket.on('state', handleState)
    const unsubscribe = () => socket.off('state', handleState)
    return unsubscribe
  })
}

function * receiveState (socketChannel) {
  while (true) {
    const state = yield take(socketChannel)
    yield put(setState(state))
  }
}

function * watchActionsToEmit (socket) {
  yield takeEvery(['VOTE', 'NEXT'], emitAction, socket)
}

function * emitAction (socket, action) {
  socket.emit('action', action)
}

function * socketSaga () {
  const socket = io(`${location.protocol}//${location.hostname}:8090`)
  const socketChannel = yield call(createSocketChannel, socket)
  yield all([
    call(receiveState, socketChannel),
    call(watchActionsToEmit, socket)
  ])
}

export default socketSaga
