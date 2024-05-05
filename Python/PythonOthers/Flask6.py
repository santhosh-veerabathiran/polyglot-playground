# -*- coding: utf-8 -*-
"""
Created on Mon Jan 15 11:49:52 2024

@author: Santhosh
"""

from flask import Flask,render_template,request

app = Flask(__name__)

@app.route("/home")
def home():
    return render_template("Flask6.html")

@app.route("/next",methods=['POST',"GET"])
def next():
    datas = request.form.to_dict()
    n = datas["fname"] + " " + datas["lname"]
    e = datas["email"]
    return render_template("Flask6.html",name=n,email=e)

if __name__ == "__main__":
    app.run(debug=True, port=3006)