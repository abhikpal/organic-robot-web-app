from flask import render_template

from orgrobo import app
from orgrobo import socketio

@app.route('/')
def index():
    return render_template('index.html', async_mode=socketio.async_mode)

@app.route('/control/')
def controller():
    return render_template('controller.html',
                            title="Organic Robot: Controller",
                            async_mode=socketio.async_mode)

@app.route('/robot/')
def robot():
    return render_template('robot.html',
                            title="Organic Robot: Robot",
                            async_mode=socketio.async_mode)
