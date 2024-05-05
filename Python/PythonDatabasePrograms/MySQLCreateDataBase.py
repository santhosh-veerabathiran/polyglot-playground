# -*- coding: utf-8 -*-
"""
Created on Fri Jun  2 00:48:08 2023

@author: Santhosh
"""

import mysql.connector as con

dbcon = con.connect(host="localhost", user="root", password="your_password")

cur = dbcon.cursor()

cur.execute("Create Database MyDataBase1")

print("MyDataBase1 Created successfully")