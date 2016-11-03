from orgrobo import app
from orgrobo import socketio

socketio.run(app, host='0.0.0.0', debug=True)
