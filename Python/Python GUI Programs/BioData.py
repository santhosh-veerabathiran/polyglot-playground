from tkinter import *
from tkinter import ttk, messagebox
from tkcalendar import *

def b1_click():
    str1 = l1['text'] + "  " + e1.get() + "\n"    
    str1 += l2['text'] + "  " + e2.get() + "\n"    
    str1 += l3['text'] + "  " + e3.get() + "\n"
    str1 += l4['text'] + "  " + e4.get() + "\n"
    str1 += l5['text'] + "  "
    
    if rbvar1.get() == 1:
        str1 += rb1['text'] + "\n"
    else:
        str1 += rb2['text'] + "\n"
    
    str1 += l6['text'] + "  " + de1.get() + "\n"
    str1 += l7['text'] + "  "
    
    if rbvar1.get() == 3:
        str1 += rb3['text'] + "\n"
    else:
        str1 += rb4['text'] + "\n"
        
    str1 += l8['text'] + "  " + cob1.get() + "\n"
    str1 += l9['text'] + "  "
    
    if cbvar1.get() == 1:
        str1 += cb1['text'] + "  "
    if cbvar2.get() == 1:
        str1 += cb2['text'] + "  "
    if cbvar3.get() == 1:
        str1 += cb3['text'] + "  "
    if cbvar4.get() == 1:
        str1 += cb4['text'] + "  "
    
    str1 += "\n"
    str1 += l10['text'] + t1.get("1.0","end-1c")        
    
    messagebox.showinfo(message=str1,title="Bio Data")
    
def b2_click():
    e1.delete(0,END)
    e2.delete(0,END)
    e3.delete(0,END)
    e4.delete(0,END)
    cb1.deselect()
    cb2.deselect()
    cb3.deselect()
    cb4.deselect()
    t1.delete("1.0","end-1c")

root = Tk()
root.title("Bio Data")
root.geometry("500x650")

f1 = ("Book Antiqua",12)

l1 = Label(root,text="Name:",anchor="w",font=f1)
l1.place(x=20,y=20,width=150,height=30)

e1 = Entry(root,font=f1)
e1.place(x=180,y=20,width=300,height=30)

l2 = Label(root,text="Phone Number:",anchor="w",font=f1)
l2.place(x=20,y=70,width=150,height=30)

e2 = Entry(root,font=f1)
e2.place(x=180,y=70,width=300,height=30)

l3 = Label(root,text="Email Id:",anchor="w",font=f1)
l3.place(x=20,y=120,width=150,height=30)

e3 = Entry(root,font=f1)
e3.place(x=180,y=120,width=300,height=30)

l4 = Label(root,text="Father's Name:",anchor="w",font=f1)
l4.place(x=20,y=170,width=150,height=30)

e4 = Entry(root,font=f1)
e4.place(x=180,y=170,width=300,height=30)

l5 = Label(root,text="Gender:",anchor="w",font=f1)
l5.place(x=20,y=220,width=150,height=30)

rbvar1 = IntVar()

rb1 = Radiobutton(root,text="Male",variable=rbvar1,value=1,font=f1)
rb1.place(x=160,y=220,width=100,height=30)

rb2 = Radiobutton(root,text="Female",variable=rbvar1,value=2,font=f1)
rb2.place(x=270,y=220,width=100,height=30)

l6 = Label(root,text="Date Of Birth:",anchor="w",font=f1)
l6.place(x=20,y=270,width=150,height=30)

de1 = DateEntry(root,font=f1)
de1.place(x=180,y=270,width=300,height=30)

l7 = Label(root,text="Marital Status:",anchor="w",font=f1)
l7.place(x=20,y=320,width=150,height=30)

rbvar2 = IntVar()

rb3 = Radiobutton(root,text="Married",variable=rbvar2,value=3,font=f1)
rb3.place(x=170,y=320,width=100,height=30)

rb4 = Radiobutton(root,text="Unmarried",variable=rbvar2,value=4,font=f1)
rb4.place(x=280,y=320,width=100,height=30)

l8 = Label(root,text="Religion:",anchor="w",font=f1)
l8.place(x=20,y=370,width=150,height=30)

values = ["Christian","Hindu","Muslim"]

cob1 = ttk.Combobox(root,values=values,font=f1)
cob1.place(x=180,y=370,width=300,height=30)

l9 = Label(root,text="Language Known:",anchor="w",font=f1)
l9.place(x=20,y=420,width=150,height=30)

cbvar1 = IntVar()
cb1 = Checkbutton(root,text="Tamil",variable=cbvar1,offvalue=0,onvalue=1,font=f1)
cb1.place(x=180,y=420,width=70,height=30)

cbvar2 = IntVar()
cb2 = Checkbutton(root,text="English",variable=cbvar2,offvalue=0,onvalue=1,font=f1)
cb2.place(x=255,y=420,width=75,height=30)

cbvar3 = IntVar()
cb3 = Checkbutton(root,text="Hindi",variable=cbvar3,offvalue=0,onvalue=1,font=f1)
cb3.place(x=335,y=420,width=70,height=30)

cbvar4 = IntVar()
cb4 = Checkbutton(root,text="Telugu",variable=cbvar4,offvalue=0,onvalue=1,font=f1)
cb4.place(x=410,y=420,width=70,height=30)

l10 = Label(root,text="Address:",anchor="w",font=f1)
l10.place(x=20,y=470,width=150,height=30)

t1 = Text(root,font=f1)
t1.place(x=180,y=470,width=300,height=100)

b1 = Button(root,text="Submit",font=f1,command=b1_click)
b1.place(x=125,y=600,width=100,height=30)

b2 = Button(root,text="Cancel",font=f1,command=b2_click)
b2.place(x=275,y=600,width=100,height=30)

root.mainloop()