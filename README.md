# Introduction

Ken Boone's *Organic Robot* makes for an excellent introdution to robotics for a sufficnetly
large set of students. This repository contains code for a Flask web app that we use at
Ardubotics as a replacement for the two-way radios used in the original design

Ken Boone has a fifteeen page write up complete with workshop intructions. The said PDF is
also hosted on [his website](http://www.kensrobots.com/Organic.pdf).

# Setup and Usage

```bash
[~] $ # clone the repository
[~] $ git clone 'htttp://www.github.com/abhikpal/organic-robot-web-app' organic-robot
[~] $ cd organic-robot
[~/organic-robot/] $ # Create and activate the virtual environment
[~/organic-robot/] $ virtualenv -p python3 orenv
[~/organic-robot/] $ source orenv/bin/activate
(orenv) [~/organic-robot/] $ 
(orenv) [~/organic-robot/] $ # Install all the dependencies
(orenv) [~/organic-robot/] $ pip install -r requirements.txt
(orenv) [~/organic-robot/] $ 
(orenv) [~/organic-robot/] $ # Run the application
(orenv) [~/organic-robot/] $ python app.py
```
