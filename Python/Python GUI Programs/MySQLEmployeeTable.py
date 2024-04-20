from tkinter import *
from tkinter import messagebox
import mysql.connector as con

db = con.connect(host="localhost", user="root", password="your_password", database="MyDataBase1")
cur = db.cursor()

def b1_click():   
    query = """Insert into Employee(EmpID, EmpName, Gender, Salary)
    values({0},'{1}','{2}',{3})""".format(e1.get(),e2.get(),e3.get(),e4.get())  
    
    cur.execute(query)
    
    db.commit()
    
    messagebox.showinfo(message=str(cur.rowcount)+" row inserted")
    
def b2_click():   
    query = """Update Employee set EmpName='{1}', Gender='{2}', Salary={3}
    where EmpID={0}""".format(e1.get(),e2.get(),e3.get(),e4.get())  
    
    cur.execute(query)
    
    db.commit()
    
    messagebox.showinfo(message=str(cur.rowcount)+" row updated")
    
def b3_click():   
    query = "Delete from Employee where EmpID={0}".format(e1.get())  
    
    cur.execute(query)
    
    db.commit()
    
    messagebox.showinfo(message=str(cur.rowcount)+" row deleted")
    
def b4_click():   
    query = "Select * from Employee where EmpID={0}".format(e1.get())
    
    cur.execute(query)
    
    for i in cur:
        e1.delete(0,END)
        e1.insert(0,i[0])
        e2.delete(0,END)
        e2.insert(0,i[1])
        e3.delete(0,END)
        e3.insert(0,i[2])
        e4.delete(0,END)
        e4.insert(0,i[3])
    
    if cur.rowcount <= 0:
        messagebox.showinfo(message="Record not found")
    
def b5_click():   
    query = "Select * from Employee"
    
    cur.execute(query)
    
    for i in cur:
        e1.delete(0,END)
        e1.insert(0,i[0])
        e2.delete(0,END)
        e2.insert(0,i[1])
        e3.delete(0,END)
        e3.insert(0,i[2])
        e4.delete(0,END)
        e4.insert(0,i[3])
        
        messagebox.showinfo(message="Next")
    else:
        messagebox.showinfo(message="Finished")
    
root = Tk()
root.title("Employee Table")
root.geometry("600x400")

f1=("Book Antiqua",12)

l1 = Label(root, text="Employee ID:", anchor="w",font=f1)
l1.place(x=110,y=60,width=150,height=30)
   
e1 = Entry(root,font=f1)
e1.place(x=270,y=60,width=220,height=30)

l2 = Label(root, text="Employee Name:", anchor="w",font=f1)
l2.place(x=110,y=120,width=150,height=30)
   
e2 = Entry(root,font=f1)
e2.place(x=270,y=120,width=220,height=30)

l3 = Label(root, text="Employee Gender:", anchor="w",font=f1)
l3.place(x=110,y=180,width=150,height=30)
   
e3 = Entry(root,font=f1)
e3.place(x=270,y=180,width=220,height=30)

l4 = Label(root, text="Employee Salary:", anchor="w",font=f1)
l4.place(x=110,y=240,width=150,height=30)
   
e4 = Entry(root,font=f1)
e4.place(x=270,y=240,width=220,height=30)

b1 = Button(root, text="Insert", font=f1, command=b1_click)
b1.place(x=60,y=310,width=80,height=30)

b2 = Button(root, text="Update", font=f1, command=b2_click)
b2.place(x=160,y=310,width=80,height=30)

b3 = Button(root, text="Delete", font=f1, command=b3_click)
b3.place(x=260,y=310,width=80,height=30)

b4 = Button(root, text="Select", font=f1, command=b4_click)
b4.place(x=360,y=310,width=80,height=30)

b5 = Button(root, text="View",font=f1, command=b5_click)
b5.place(x=460,y=310,width=80,height=30) 

root.mainloop()

db.close()