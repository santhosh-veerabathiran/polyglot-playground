# -*- coding: utf-8 -*-
"""
Created on Mon Jan 15 11:35:03 2024

@author: Santhosh
"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/home")
def home():
    return render_template("Flask5.html")

@app.route("/next")
def next():
    return render_template("Flask51.html")

if __name__ == "__main__":
    app.run(debug=True, port=3005)