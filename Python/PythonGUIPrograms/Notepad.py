from tkinter import *
from tkinter import filedialog, colorchooser, messagebox

def new_click():
    t1.delete("1.0","end-1c")

def open_click():
    files = [("Text Documents","*.txt")]    
    try:
        f = filedialog.askopenfile(title="Open",filetypes=files,defaultextension=files)
        t1.delete("1.0","end-1c")
        t1.insert("1.0",f.readlines())
        f.close()
    except:
        pass

def save_click():
    files = [("Text Documents","*.txt")]    
    try:
        f = filedialog.asksaveasfile(title="Save",filetypes=files,defaultextension=files)
        f.write(t1.get(1.0,"end-1c"))
        f.close()
    except:
        pass        

def exit_click():     
    if t1.get("1.0","end-1c") != "":
        res = messagebox.askyesnocancel(title="Bio Data",message="Do you want to save changes?")
        
        if res == True:
            save_click()
            root.destroy()
        elif res == False:
            root.destroy()
    else:
        root.destroy()

def cut_click():
    t1.event_generate("<<Cut>>")

def copy_click():
    t1.event_generate("<<Copy>>")
        
def paste_click():
    t1.event_generate("<<Paste>>")

def selectall_click():
    t1.event_generate("<<SelectAll>>")

def font_click():
    pass

def color_click():
    c = colorchooser.askcolor(title="color")
    try:        
        t1.tag_add("colorchange","sel.first","sel.last")
        t1.tag_config("colorchange",foreground=c[1])
    except:
        pass

def bold_click():
    pass

def italic_click():
    pass

def underline_click():
    pass

def strikeout_click():
    pass

root = Tk()
root.title("Notepad")
root.geometry("800x500")

f1 = ("Book Antiqua",12)

mbar = Menu(root,font=f1)

filem = Menu(mbar,font=f1,tearoff=0)

filem.add_command(label="New",font=f1,command=new_click)
filem.add_command(label="Open",font=f1,command=open_click)
filem.add_command(label="Save",font=f1,command=save_click)
filem.add_separator()
filem.add_command(label="Exit",font=f1,command=exit_click)

mbar.add_cascade(label="File",font=f1,menu=filem)

editm = Menu(mbar,font=f1,tearoff=0)

editm.add_command(label="Cut",font=f1,command=cut_click)
editm.add_command(label="Copy",font=f1,command=copy_click)
editm.add_command(label="Paste",font=f1,command=paste_click)
editm.add_command(label="Select All",font=f1,command=selectall_click)

mbar.add_cascade(label="Edit",font=f1,menu=editm)

formatm = Menu(mbar,font=f1,tearoff=0)

formatm.add_command(label="Font",font=f1,command=font_click)
formatm.add_command(label="Color",font=f1,command=color_click)

mbar.add_cascade(label="Format",font=f1,menu=formatm)

toolsm = Menu(mbar,font=f1,tearoff=0)

toolsm.add_command(label="Bold",font=f1,command=bold_click)
toolsm.add_command(label="Italic",font=f1,command=italic_click)
toolsm.add_command(label="Under Line",font=f1,command=underline_click)
toolsm.add_command(label="Strike Out",font=f1,command=strikeout_click)

mbar.add_cascade(label="Tools",font=f1,menu=toolsm)

root.config(menu=mbar)

t1 = Text(root,font=f1,height=50,width=160)
t1.grid(row=0,column=0)

root.protocol("WM_DELETE_WINDOW",exit_click)

root.mainloop()