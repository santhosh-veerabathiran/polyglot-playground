import tkinter as tk
from re import S


def button_widget():
    def button_click():
        tk.messagebox.showinfo("Click", "Button is clicked")

    root = tk.Tk()

    b1 = tk.Button(
        root,
        text="Button",
        font=("Bookman Old Style", 12),
        command=button_click,
        bg="lime",
        activebackground="Red",
        activeforeground="white",
    )
    b1.place(x=50, y=50, width=100, height=30)
    root.mainloop()


button_widget()


def canvas_widget():
    root = tk.Tk()
    c1 = tk.Canvas(root, bd=10, bg="red", width=200, height=200)
    c1.pack()

    c1.create_line(50, 50, 200, 50)
    root.mainloop()


canvas_widget()


def checkbutton_widget():
    def checkbutton_click():
        tk.messagebox.showinfo("Click", "Checkbutton is clicked")

    root = tk.Tk()

    var1 = tk.IntVar()
    tk.Checkbutton(
        root,
        text="Listening Music",
        activebackground="red",
        activeforeground="white",
        bg="lime",
        variable=var1,
        command=checkbutton_click,
        font=("Bookman Old Style", 12),
    ).pack()

    var2 = tk.IntVar()
    tk.Checkbutton(
        root,
        text="Playing Cricket",
        activebackground="lime",
        activeforeground="white",
        bg="red",
        variable=var2,
        command=checkbutton_click,
        font=("Bookman Old Style", 12),
    ).pack()

    var3 = tk.IntVar()
    tk.Checkbutton(
        root,
        text="Watching Movies",
        activebackground="red",
        activeforeground="white",
        bg="lime",
        variable=var3,
        command=checkbutton_click,
        font=("Bookman Old Style", 12),
    ).pack()

    root.mainloop()


checkbutton_widget()


def entry_widget():
    root = tk.Tk()

    tk.Label(root, text="First Name: ").grid(row=0)
    tk.Label(root, text="Last Name: ").grid(row=1)

    tk.Entry(root, bd=10, bg="lime", highlightcolor="red", fg="white").grid(row=0, column=1)
    tk.Entry(root, bd=10, bg="lime", highlightcolor="red", fg="white").grid(row=1, column=1)

    root.mainloop()


entry_widget()


def frame_container():
    root = tk.Tk()

    lframe = tk.Frame(root)
    lframe.pack(side="left")

    rframe = tk.Frame(root)
    rframe.pack(side="right")

    tframe = tk.Frame(root)
    tframe.pack(side="top")

    bframe = tk.Frame(root, bg="red")
    bframe.pack(side="bottom")

    redbutton = tk.Button(lframe, text="red", fg="red")
    redbutton.pack(side="left")

    greenbutton = tk.Button(rframe, text="green", fg="green")
    greenbutton.pack(side="left")

    bluebutton = tk.Button(tframe, text="blue", fg="blue")
    bluebutton.pack(side="left")

    blackbutton = tk.Button(bframe, text="black", fg="black")
    blackbutton.pack(side="bottom")

    root.mainloop()


frame_container()


def label_widget():
    root = tk.Tk()

    l1 = tk.Label(root, text="Label", bg="red", fg="white", font=("Book Antiqua", 12))
    l1.pack()

    root.mainloop()


label_widget()


def listbox_widget():
    root = tk.Tk()

    lb1 = tk.Listbox(root, fg="white", bg="red")
    lb1.insert(0, "Tiruchi")
    lb1.insert(1, "Ariyalur")
    lb1.insert(2, "Chengalpattu")
    lb1.insert(3, "Chennai")
    lb1.insert(4, "Kancheepuram")
    lb1.pack()

    root.mainloop()


listbox_widget()


def menubutton_widget():
    root = tk.Tk()

    mb1 = tk.Menubutton(root, text="Menubutton")
    mb1.grid()

    mb1.menu = tk.Menu(mb1, tearoff=0)
    mb1["menu"] = mb1.menu

    var1 = tk.IntVar()
    var2 = tk.IntVar()

    mb1.menu.add_checkbutton(label="Contact", variable=var1)
    mb1.menu.add_checkbutton(label="About", variable=var2)
    mb1.pack()

    root.mainloop()


menubutton_widget()


def menu_widget():
    root = tk.Tk()

    m1 = tk.Menu(root)
    root.configure(menu=m1)

    filemenu = tk.Menu(root)
    m1.add_cascade(label="File", menu=filemenu)

    editmenu = tk.Menu(root)
    m1.add_cascade(label="Edit", menu=editmenu)

    filemenu.add_command(label="New")
    filemenu.add_command(label="Open")
    filemenu.add_command(label="Save")
    filemenu.add_separator()
    filemenu.add_command(label="Exit")

    editmenu.add_command(label="Cut")
    editmenu.add_command(label="Copy")
    editmenu.add_command(label="Paste")
    editmenu.add_separator()
    editmenu.add_command(label="Select All")

    root.mainloop()


menu_widget()


def message_widget():
    root = tk.Tk()

    m1 = tk.Message(root)
    m1.config(text="Tom and Jerry both are best friends")
    m1.config(font=("Bookman Old Style", 25))
    m1.configure(bg="lightgreen")
    m1.pack()

    root.mainloop()


message_widget()


def radiobutton_widget():
    root = tk.Tk()

    var1 = tk.IntVar()
    tk.Radiobutton(root, text="Male", variable=var1, value=1).pack(anchor="w")
    tk.Radiobutton(root, text="Female", variable=var1, value=2).pack(anchor="w")

    root.mainloop()


radiobutton_widget()


def scale_widget():
    root = tk.Tk()

    s1 = tk.Scale(root, from_=0, to=42)
    s1.pack()

    s2 = tk.Scale(root, from_=0, to=200, orient="horizontal")
    s2.pack()

    root.mainloop()


scale_widget()


def scrollbar_widget():
    root = tk.Tk()

    sb1 = tk.Scrollbar(root)
    sb1.pack(side=tk.RIGHT, fill=tk.Y)

    lb1 = tk.Listbox(root, yscrollcommand=sb1.set)
    for i in range(1, 101):
        lb1.insert(tk.END, str(i))
    lb1.pack(side=tk.LEFT, fill=tk.BOTH)
    sb1.config(command=lb1.yview)

    root.mainloop()


scrollbar_widget()


def text_widget():
    root = tk.Tk()

    t1 = tk.Text(root, height=5, width=50, bg="red", fg="white")
    t1.pack()
    for i in range(1, 11):
        t1.insert(tk.END, "Tom and Jerry\n")

    root.mainloop()


text_widget()


def toplevel_widget():
    root = tk.Tk()
    root.title("Root")

    top = tk.Toplevel()
    top.title("Top")

    top.mainloop()


toplevel_widget()


def spinbox_widget():
    root = tk.Tk()

    sb1 = tk.Spinbox(root, from_=1, to=100)
    sb1.pack()

    root.mainloop()


spinbox_widget()


def panedwindow_container():
    root = tk.Tk()

    pw1 = tk.PanedWindow()
    pw1.pack(fill=tk.BOTH, expand=1)

    e1 = tk.Entry(pw1, bd=5)
    pw1.add(e1)

    pw2 = tk.PanedWindow(pw1, orient=tk.VERTICAL)
    pw1.add(pw2)

    scale = tk.Scale(pw2, orient=tk.HORIZONTAL)
    pw2.add(scale)

    root.mainloop()


panedwindow_container()
