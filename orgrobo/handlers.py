from orgrobo import socketio

@socketio.on('update', namespace='/sensors')
def move(message):
    # print(message)
    # print(request.remote_addr)
    socketio.emit('movement',
                    {
                        'x':message['x'],
                        'y':message['y'],
                        'client':request.remote_addr
                    },
                    namespace='/projection')
