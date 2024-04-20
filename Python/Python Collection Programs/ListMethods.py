# 1. append(object)

list1 = ["apple","banana","cherry"]
print("List:", list1)
list1.append("grapes")
print("Append:", list1)
print()

# 2. clear()

list2 = ["apple","banana","cherry"]
print("List:", list2)
list2.clear()
print("Clear: ", list2)
print()

# 3. copy()

list3 = ["apple","banana","cherry"]
print("List:", list3)
print("Copy:", list3.copy())
print()

# 4. count(object)

list4 = ["apple","banana","cherry","banana"]
print("List: ", list4)
print("Count (banana):", list4.count("banana"))
print()

# 5. extend(iterable)

list5 = ["apple","banana","cherry"]
print("List:", list5)
list5.extend(("grapes","guava"))
print("Extend: ", list5)
print()

# 6. index(object[,start[,end]])

list6 = ["apple","banana","cherry"]
print("List:", list6)
print("Index (cherry):",list6.index("cherry"))
print()

# 7. insert(index,object)

list7 = ["apple","banana","cherry"]
print("List:", list7)
list7.insert(2,"mango")
print("Insert (2):", list7)
print()

# 8. pop([index])

list8 = ["apple","banana","cherry"]
print("List:", list8)
list8.pop(1)
print("Pop (1):", list8)
print()

# 9. remove(value)

list9 = ["apple","banana","cherry"]
print("List:", list9)
list9.remove("cherry")
print("Remove:", list9)
print()

# 10. reverse()

list10 = ["apple","banana","cherry"]
print("List:", list10)
list10.reverse()
print("Reverse:", list10)
print()

# 11. sort()

list11 = ["cherry","grapes","apple"]
print("List:", list11)
list11.sort()
print("Sort:", list11)
print()

# 12. len(object)

list12 = [5,10,15,20,25,30]
print("List:",list12)
print("Length:", len(list12))
print()

# 13. min(object)

list13 = [10,15,5,20,30,25]
print("List:",list13)
print("Minimum:", min(list13))
print()

# 14. max(object)

list14 = [10,15,5,20,30,25]
print("List:",list14)
print("Maximum:", max(list14))
print()