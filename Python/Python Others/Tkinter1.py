from tkinter import *

def Load1():
    top = Tk()
    
    redbutton = Button(top,text="Red",fg="red")
    redbutton.pack(side=LEFT)
    
    greenbutton = Button(top,text="Green",fg="green")
    greenbutton.pack(side=RIGHT)
    
    bluebutton = Button(top,text="Blue",fg="blue")
    bluebutton.pack(side=TOP)
    
    blackbutton = Button(top,text="Black",fg="black")
    blackbutton.pack(side=BOTTOM)
    
    top.mainloop()
    
#Load1()

def Load2():
    top = Tk()
    
    name = Label(top,text="Name").grid(row=0,column=0)
    e1=Entry(top).grid(row=0,column=1)
    
    password = Label(top,text="Password").grid(row=1,column=0)
    e2=Entry(top).grid(row=1,column=1)
    
    submit = Button(top,text="Submit").grid(row=4,column=0)
    
    top.mainloop()
    
#Load2()

def Load3():
    top=Tk()
    
    top.geometry("500x400")
    
    name = Label(top,text="Name",anchor="w").place(x=80,y=115,width=120,height=30)
    e1=Entry(top).place(x=220,y=115,width=200,height=30)
    
    email = Label(top,text="Email",anchor="w").place(x=80,y=185,width=120,height=30)
    e2=Entry(top).place(x=220,y=185,width=200,height=30)
    
    password = Label(top,text="Password",anchor="w").place(x=80,y=255,width=120,height=30)
    e3=Entry(top).place(x=220,y=255,width=200,height=30)
    
    top.mainloop()

Load3()