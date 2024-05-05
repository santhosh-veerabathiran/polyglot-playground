# 1. add(element)

set1 = {"apple","banana","cherry"}
print("Set:", set1)
set1.add("orange")
print("Add:", set1)
print()

# 2. clear()

set2 = {"apple","banana","cherry"}
print("Set:", set2)
set2.clear()
print("Clear:", set2)
print()

# 3. copy()

set3 = {"apple","banana","cherry"}
print("Set:", set3)
print("Copy:", set3.copy())
print()

# 4. difference(s) (-)

set4 = [{5,10,15,20,25,30},{10,20,30,40,50}]
print("Sets:", set4)
print("Difference:", set4[0].difference(set4[1]))
print()

# 5. difference_update(s)

set5 = [{5,10,15,20,25,30},{10,20,30,40,50}]
print("Sets:", set5)
set5[0].difference_update(set5[1])
print("Difference Update:", set5)
print()

# 6. discard(element)

set6 = {"apple","banana","cherry"}
print("Set:", set6)
set6.discard("banana")
print("Discard:", set6)
print()

# 7. intersection(s) (&)

set7 = [{5,10,15,20,25,30},{10,20,30,40,50}]
print("Sets:", set7)
print("Intersection:", set7[0].intersection(set7[1]))
print()

# 8. intersection_update(s)

set8 = [{5,10,15,20,25,30},{10,20,30,40,50}]
print("Sets:", set5)
set8[0].intersection_update(set8[1])
print("Intersection Update:", set8)
print()

# 9. isdisjoint(s)

set9 = [{5,10,15,20},{10,20,30},{2,4,6}]
print("Sets:", set9)
print("Disjoint (0,1)?:", set9[0].isdisjoint(set9[1]))
print("Disjoint (0,2)?:", set9[0].isdisjoint(set9[2]))
print()

# 10. issubset(s)

set10 = [{10,20},{5,10,15,20},{20,40,60}]
print("Sets:", set10)
print("Subset (0,1)?:", set10[0].issubset(set10[1]))
print("Subset (0,2)?:", set10[0].issubset(set10[2]))
print()

# 11. issuperset(s)

set11 = [{5,10,15,20},{10,20},{20,40}]
print("Sets:", set11)
print("Superset (0,1)?:", set11[0].issuperset(set11[1]))
print("Superset (0,2)?:", set11[0].issuperset(set11[2]))
print()

# 12. pop()

set12 = {"apple","banana","cherry"}
print("Set:", set12)
set12.pop()
print("Pop:", set12)
print()

# 13. remove(element)

set13 = {"apple","banana","cherry"}
print("Set:", set13)
set13.remove("apple")
print("Remove (apple):", set13)
print()

# 14. symmetric_difference(s) (^)

set14 = [{5,10,15,20,25,30},{10,20,30,40,50}]
print("Sets:", set14)
print("Symmetric difference:", set14[0].symmetric_difference(set14[1]))
print()

# 15. symmetric_difference_update(s)

set15 = [{5,10,15,20,25,30},{10,20,30,40,50}]
print("Sets:", set15)
set15[0].symmetric_difference_update(set15[1])
print("Symmetric difference update:", set15)
print()

# 16. union(s) (|)

set16 = [{5,10,15,20,25,30},{10,20,30,40,50}]
print("Sets:", set16)
print("Union:", set16[0].union(set16[1]))
print()

# 17. update()

set17 = [{"apple","banana","cherry"},{"banana","grapes","guava"}]
print("Set:", set17)
set17[0].update(set17[1])
print("Update:",set17[0])
print()

# 18. len(iterable)

set18 = {5,10,15,20,25,30}
print("Set:", set18)
print("Length:", len(set18))
print()

# 19. min(object)

set19 = {5,10,15,20,25,30}
print("Set:", set18)
print("Minimum:", min(set18))
print()

# 20. max(object)

set18 = {5,10,15,20,25,30}
print("Set:", set18)
print("Maximum:", max(set18))
print()