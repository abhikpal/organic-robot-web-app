from flask import Flask 
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, async_mode=None)

from orgrobo import views
from orgrobo import handlers
