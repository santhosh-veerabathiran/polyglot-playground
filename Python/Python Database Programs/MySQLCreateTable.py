# -*- coding: utf-8 -*-
"""
Created on Fri Jun  2 00:58:07 2023

@author: Santhosh
"""

import mysql.connector as con

dbcon = con.connect(host="localhost", user="root", password="your_password", database="MyDataBase1")

cur = dbcon.cursor()

def StudentTable():
    cur.execute("Create Table Student(StuID int Primary Key, StuName varchar(30), Gender varchar(10), Age int)")
    print("Student Table Created Successfully...")
    print()

def EmployeeTable():
    cur.execute("Create Table Employee(EmpID int Primary Key, EmpName varchar(30), Gender varchar(10), Salary int)")
    print("Employee Table Created Successfully...")
    print()

def CustomerTable():
    cur.execute("Create Table Customer(CusID int Primary Key, CusName varchar(30), MobNo bigint, City varchar(30))")
    print("Customer Table Created Successfully...")
    print()

StudentTable()
EmployeeTable()
CustomerTable()