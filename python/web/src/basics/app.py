import sys
from pathlib import Path

project_root = Path(__file__).parent.parent.parent
sys.path.append(str(project_root))

from flask import Flask, render_template, request

from src.environment import environment

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    try:
        return render_template("home.html")
    except Exception as e:
        print(e)
        return "Error: " + str(e)


@app.route("/home", methods=["POST"])
def result():
    try:
        form = request.form.to_dict()
        return render_template("home.html", first_name=form['first_name'], last_name=form['last_name'], email=form['email'])
    except Exception as e:
        print(e)
        return "Error: " + str(e)


@app.route("/next/<name>")
def next(name):
    try:
        return render_template("next.html", name=name)
    except Exception as e:
        print(e)
        return "Error: " + str(e)


if __name__ == "__main__":
    app.run(debug=environment['debug'], port=environment['port'])
