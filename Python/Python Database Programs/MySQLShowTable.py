# -*- coding: utf-8 -*-
"""
Created on Fri Jun  2 01:08:54 2023

@author: Santhosh
"""

import mysql.connector as con

dbcon = con.connect(host="localhost", user="root", password="your_password", database="MyDataBase1")

cur = dbcon.cursor()

cur.execute("Show Tables")

for i in cur:
    print(i)