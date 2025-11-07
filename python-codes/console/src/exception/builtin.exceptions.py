import math
import sys

import numpy as np

# 1. Arithmetic Error

try:
    n = 10 / 0
    print(n)

except ArithmeticError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 2. Assertion Error

try:
    num1 = 10
    num2 = 20
    assert num1 > num2, "num1 must be greater"
    print(num1, "is greater than", num2)

except AssertionError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 3. Attribute Error

try:
    num = 10
    num.append(20)

except AttributeError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 4. Exception

try:
    n = 10 / 0
    print(n)

except Exception as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 5. EOF Error


# 6. Floating Point Error

try:
    with np.errstate(invalid="raise"):
        print("Square root (-1):", np.sqrt(-1))

except FloatingPointError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 7. Generator Exit

# 8. Import Error

try:
    import mod1

except ImportError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 9. Indentation Error

# 10. Index Error

list1 = [5, 10, 20, 40]

try:
    print(list1[5])

except IndexError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 11. Key Error

dict1 = {"name": "Ford", "brand": "Mustang"}

try:
    print(dict1["year"])

except KeyError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 12. Key Board Interrupt

try:
    while True:
        num = input("Enter ctrl + c: ")
        print("You pressed value other than the ctrl + c, please press ctrl + c to exit")

except KeyboardInterrupt as e:
    print()
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 13. Lookup Error

list1 = [5, 10, 20, 40]

try:
    print(list1[5])

except LookupError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 14. Memory Error

# 15. Name Error

try:
    print(a)

except NameError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 16. Not Implemented Error

# 17. OS Error

# 18. Overflow Error

try:
    print(math.exp(1000))

except OverflowError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 19. Reference Error

# 20. Runtime Error

# 21. Stop Iteration

# 22. Syntax Error

try:
    print(eval("Virat Kohli"))

except SyntaxError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 23. Tab Error

# 24. System Error

# 25. System Exit

try:
    sys.exit("sys.exit() is called")

except SystemExit as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 26. Type Error

try:
    num1 = 10
    str1 = "Hi"
    print(num1 + str1)

except TypeError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 27. Unbound Local Error


def fun():
    num = num + 10
    print(num)


try:
    fun()

except UnboundLocalError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 28. Unicode Error

# 29. Unicode Encode Error

# 30. Unicode Decode Error

# 31. Unicode Translate Error

# 32. Value Error

try:
    print(int("a"))

except ValueError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()

# 33. Zero Division Error

try:
    n = 10 / 0
    print(n)

except ZeroDivisionError as e:
    print("Error Message:", e)
    print("Class:", e.__class__)

print()
