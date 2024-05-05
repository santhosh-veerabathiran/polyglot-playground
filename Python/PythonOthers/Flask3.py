# -*- coding: utf-8 -*-
"""
Created on Mon Jan 15 10:25:11 2024

@author: Santhosh
"""

from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "<h1>Welcome Buddy</h1>"

@app.route("/home/<name>")
def first(name):
    return "<h1>Hello %s</h1>"%name

@app.route("/next/<int:age>")
def next(age):
    return "<h1>Your age is %d"%age
    
if __name__ == "__main__":
    app.run(debug=True, port=3003)