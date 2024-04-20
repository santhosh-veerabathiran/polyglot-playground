# -*- coding: utf-8 -*-
"""
Created on Fri Jun  2 01:10:57 2023

@author: Santhosh
"""

import mysql.connector as con
import sys

dbcon = con.connect(host="localhost", user="root", password="your_password", database="MyDataBase1")

cur = dbcon.cursor()
   
while (True):
    print()
    print("Press 1: To insert an record---")
    print("Press 2: To update an record---")
    print("Press 3: To delete an record---")
    print("Press 4: To select an record---")
    print("Press 5: To exit---\n")
    
    s1 = input()
    print()
    
    if s1=='1':
        
        id = int(input("Enter student id: "))
        name = input("Enter student name: ")
        course = input("Enter student gender: ")
        year = input("Enter student age: ")
        
        query="insert into student(StuID, StuName, Gender, Age) values({0},'{1}','{2}',{3})".format(id, name, course, year)
        
        cur.execute(query)
        
        dbcon.commit()
        
        print()
        print(cur.rowcount, "row inserted")
        
    elif s1=='2':
        id = int(input("Enter student id: "))
        name = input("Enter student name: ")
        course = input("Enter student gender: ")
        year = input("Enter student age: ")
        
        query="update student set StuName='{1}', Gender='{2}', Age={3} where StuID={0}".format(id, name, course, year)
        
        cur.execute(query)
        
        dbcon.commit()
        
        print()
        print(cur.rowcount, "row updated")
        
    elif s1=='3':
        id = int(input("Enter student id: "))
        
        query="delete from student where StuID={0}".format(id)
        
        cur.execute(query)
        
        dbcon.commit()
        
        print()
        print(cur.rowcount, "row deleted")
        
    elif s1=='4':
        id = int(input("Enter student id: "))
        
        query="select * from student where StuID={0}".format(id)
        
        cur.execute(query)

        print()        
        for i in cur:
            print(i)
            
    elif s1=='5':
        
        dbcon.close()
        sys.exit()
    else:
        print("Enter valid input ......")
    