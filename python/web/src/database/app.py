import sys
from pathlib import Path

project_root = Path(__file__).parent.parent.parent
sys.path.append(str(project_root))

import mysql.connector as con
from flask import Flask, render_template, request

from src.environment import database_config, environment

dbcon = con.connect(**database_config)
cur = dbcon.cursor(dictionary=True)


def create_student_table():
    cur.execute("CREATE TABLE IF NOT EXISTS students(student_id INT PRIMARY KEY, student_name VARCHAR(30), gender VARCHAR(10), age INT)")
    print("Table 'students' created successfully...")


def insert_student_data(form):
    exists = select_student_data(form, False)
    if exists:
        raise Exception("Student data already exists")

    query = """INSERT INTO students(student_id, student_name, gender, age) VALUES({0},'{1}','{2}',{3})""".format(
        form.get('student_id'), form.get('student_name'), form.get('student_gender'), form.get('student_age')
    )

    cur.execute(query)
    dbcon.commit()

    print(str(cur.rowcount) + " row inserted")


def update_student_data(form):
    select_student_data(form)

    query = """UPDATE students SET student_name='{1}', gender='{2}', age={3} WHERE student_id={0}""".format(
        form.get('student_id'), form.get('student_name'), form.get('student_gender'), form.get('student_age')
    )

    cur.execute(query)
    dbcon.commit()

    print(str(cur.rowcount) + " row updated")


def delete_student_data(form):
    select_student_data(form)

    query = """DELETE FROM students WHERE student_id={0}""".format(form.get('student_id'))

    cur.execute(query)
    dbcon.commit()

    print(str(cur.rowcount) + " row deleted")


def select_student_data(form, raiseException=True):
    if not form.get('student_id'):
        raise Exception("Student ID is required")

    query = """SELECT * FROM students WHERE student_id={0}""".format(form.get('student_id'))

    cur.execute(query)

    print(cur)

    for i in cur:
        return i

    if raiseException:
        raise Exception("Student data not found")


create_student_table()

app = Flask(__name__)

page = "student.html"


@app.route("/")
def home():
    try:
        return render_template(page)
    except Exception as e:
        print(e)
        return render_template(page, message=str(e))


@app.route("/insert", methods=["POST"])
def result():
    try:
        form = request.form.to_dict()
        insert_student_data(form)
        return render_template(page, message="Student data inserted successfully")
    except Exception as e:
        print(e)
        return render_template(page, message=str(e))


@app.route("/update", methods=["POST"])
def update():
    try:
        form = request.form.to_dict()
        update_student_data(form)
        return render_template(page, message="Student data updated successfully")
    except Exception as e:
        print(e)
        return render_template(page, message=str(e))


@app.route("/delete", methods=["POST"])
def delete():
    try:
        form = request.form.to_dict()
        delete_student_data(form)
        return render_template(page, message="Student data deleted successfully")
    except Exception as e:
        print(e)
        return render_template(page, message=str(e))


@app.route("/select", methods=["GET"])
def select():
    try:
        form = request.args.to_dict()
        data = select_student_data(form)
        print(data)
        return render_template(
            page,
            message="Student data selected successfully",
            student_id=data.get("student_id"),
            student_name=data.get("student_name"),
            student_gender=data.get("gender"),
            student_age=data.get("age"),
        )
    except Exception as e:
        print(e)
        return render_template(page, message=str(e))


if __name__ == "__main__":
    app.run(debug=environment['debug'], port=environment['port'])
