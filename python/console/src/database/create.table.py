# -*- coding: utf-8 -*-
"""
Created on Fri Jun  2 00:58:07 2023

@author: Santhosh
"""

import sys
from pathlib import Path

project_root = Path(__file__).parent.parent.parent
sys.path.append(str(project_root))

from src.environment import database_config
import mysql.connector as con

dbcon = con.connect(**database_config)
cur = dbcon.cursor()


def student_table():
    cur.execute("CREATE TABLE IF NOT EXISTS students(student_id INT PRIMARY KEY, student_name VARCHAR(30), gender VARCHAR(10), age INT)")
    print("Table 'students' created successfully...")
    print()


def employee_table():
    cur.execute("CREATE TABLE IF NOT EXISTS employees(employee_id INT PRIMARY KEY, employee_name VARCHAR(30), gender VARCHAR(10), salary INT)")
    print("Table 'employees' created successfully...")
    print()


def customer_table():
    cur.execute("CREATE TABLE IF NOT EXISTS customers(customer_id INT PRIMARY KEY, customer_name VARCHAR(30), phone_no BIGINT, city VARCHAR(30))")
    print("Table 'customers' created successfully...")
    print()


student_table()
employee_table()
customer_table()

dbcon.close()
