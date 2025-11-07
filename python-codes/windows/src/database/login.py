import sys
from pathlib import Path

project_root = Path(__file__).parent.parent.parent
sys.path.append(str(project_root))

from tkinter import *
from tkinter import messagebox

import mysql.connector as con

from src.environment import database_config

db = con.connect(**database_config)
cur = db.cursor(dictionary=True)


def submit():
    query = "SELECT * from login where user_id='{0}'".format(e1.get())

    cur.execute(query)

    for i in cur:
        if i['password'] == e2.get():
            messagebox.showinfo(title="Login Page", message="Login Success")
        else:
            messagebox.showinfo(title="Login Page", message="Incorrect Password")


def cancel():
    e1.delete(0, END)
    e2.delete(0, END)


root = Tk()

root.title("Login Page")
root.geometry("500x400")

f1 = ("Book Antiqua", 12)

l1 = Label(root, text="User ID:", anchor="w", font=f1)
l1.place(x=80, y=110, width=100, height=30)

e1 = Entry(root, font=f1)
e1.place(x=200, y=110, width=220, height=30)

l2 = Label(root, text="Password:", anchor="w", font=f1)
l2.place(x=80, y=170, width=100, height=30)

e2 = Entry(root, font=f1)
e2.place(x=200, y=170, width=220, height=30)

b1 = Button(root, text="Submit", font=f1, command=submit)
b1.place(x=160, y=260, width=80, height=30)

b2 = Button(root, text="Cancel", font=f1, command=cancel)
b2.place(x=260, y=260, width=80, height=30)

root.mainloop()
