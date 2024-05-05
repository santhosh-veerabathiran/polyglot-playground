# -*- coding: utf-8 -*-
"""
Created on Mon Jan 15 10:53:25 2024

@author: Santhosh
"""

from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("Flask4.html",name="Santhosh")

@app.route("/first/<names>")
def first(names):
    return render_template("Flask4.html",name=names)

if __name__ == "__main__":
    app.run(debug=True, port=3004)