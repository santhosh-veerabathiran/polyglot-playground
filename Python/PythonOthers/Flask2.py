# -*- coding: utf-8 -*-
"""
Created on Sun Jan  7 12:13:17 2024

@author: Santhosh
"""

from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "This is home page"

@app.route("/first") # To run this add /first to URL
def first():
    return "This is first page"

@app.route("/next") # To run this add /next to URL
def next():
    return "This is next page"

if __name__ == "__main__":
    app.run(port=3002)