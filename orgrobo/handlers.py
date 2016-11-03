from orgrobo import socketio

@socketio.on('move', namespace='/controller')
def move(message):
    print(message)
    socketio.emit('move', message, namespace='/dashboard')
    socketio.emit('move', message, namespace='/robot')

@socketio.on('data', namespace='/robot')
def data(message):
    print(message)
    socketio.emit('data', message, namespace='/dashboard')
    socketio.emit('data', message, namespace='/controller')
