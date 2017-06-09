import Server from 'socket.io'

const PORT = 8090

const startServer = store => {
  // start socket.io server
  const io = new Server().attach(PORT)
  console.log(`Socket.io now listening on port ${PORT}`)

  // subscribe to store and emit updates
  store.subscribe(() => {
    io.emit('state', store.getState().toJS())
  })

  // send store to newly connected clients
  io.on('connection', socket => {
    console.log('client connected')
    socket.emit('state', store.getState().toJS())
    socket.on('action', action => {
      console.log(`action '${action.type}' received`)
      store.dispatch(action)
    })
  })

  io.on('disconnection', () => {
    console.log('client disconnected')
  })
}

export default startServer
