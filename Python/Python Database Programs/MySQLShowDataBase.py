# -*- coding: utf-8 -*-
"""
Created on Fri Jun  2 01:04:11 2023

@author: Santhosh
"""

import mysql.connector as con

dbcon = con.connect(host="localhost", user="root", password="your_password")

cur = dbcon.cursor()

cur.execute("Show Databases")

for i in cur:
    print(i)