import { createStore, applyMiddleware } from 'redux'
import { configureSocketMiddleware } from './socketMiddleware'
import reducer from './reducer'

const configureStore = socket => {
  const socketMiddleware = configureSocketMiddleware(socket)
  return createStore(reducer, applyMiddleware(socketMiddleware))
}

export default configureStore
