# -*- coding: utf-8 -*-
"""
Created on Thu Jan 11 22:37:59 2024

@author: lenovo
"""

# 1. Single Inheritance

class Person:
    def __init__(self,fname,lname):
        self.fname = fname
        self.lname = lname
        
    def printname(self):
        print("Full name:",self.fname,self.lname)
        
class Student(Person):
    def __init__(self,fname,lname,year):
        super().__init__(fname,lname)
        self.year = year
        
    def welcome(self):
        print("Welcome", self.fname, "to the class of", self.year)
        
p1 = Student("Santhosh","Veerabathiran",2024)
p1.printname()
p1.welcome()

# 2. Multiple Inheritance

# 3. Multilevel Inheritance

# 4. Hierarchy Inheritance

# 5. Hybrid Inheritance