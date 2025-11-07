import os

# 1. close()

f = open("abc.txt", "w")
f.write("Tom and Jerry are best friends\n")
f.close()

# 2. detach()

f = open("abc.txt", "a")
print("Detach:", f.detach())
print()

# 3. fileno()

f = open("abc.txt", "r")
print("File No.:", f.fileno())
f.close()
print()

# 4. flush()

f = open("abc.txt", "a")
f.write("Virat Kohli is my favorite cricket player\n")
f.flush()
f.write("An original is worth more than a copy")
f.close()

# 5. isatty()

f = open("abc.txt", "r")
print("Is Atty:", f.isatty())
f.close()
print()

# 6. read()

f = open("abc.txt", "r")
print("File Contents: ")
print(f.read())
f.close()
print()

# 7. readable()

f = open("abc.txt", "a")
print("Is Readable:", f.readable())
f.close()
print()

# 8. readline()

f = open("abc.txt", "r")
print("Read Line 1:", f.readline(), end="")
print("Read Line 2:", f.readline(), end="")
f.close()
print()

# 9. readlines()

f = open("abc.txt", "r")
print("Read Lines:")
print(f.readlines())
f.close()
print()

# 10. seek(new_position)

f = open("abc.txt", "r")
f.seek(10)
print("After Seek (10):", f.readline())
f.close()
print()

# 11. seekable()

f = open("abc.txt", "r")
print("Is Seekaable:", f.seekable())
f.close()
print()

# 12. tell()

f = open("abc.txt", "r")
f.readline()
print("File Position after ReadLine:", f.tell())
f.close()
print()

# 13. truncate(size)

f = open("abc.txt", "a")
f.truncate(20)
f.close()

f = open("abc.txt", "r")  # open and read the file after the truncate
print("After truncate(20):")
print(f.read())
f.close()
print()

# 14. writable()

f = open("abc.txt", "a")
print("Is Writable:", f.writable())
f.close()
print()

# 15. write()

f = open("abc.txt", "w")
f.write("Tom and Jerry are best friends")
f.close()

f = open("abc.txt", "r")
print("After Write:", f.read())
f.close()
print()

# 16. writelines()

list1 = ["An original is worth more than a copy\n", "Do it now sometimes later become never"]
print("List:", list1)

f = open("abc.txt", "w")
f.writelines(list1)
f.close()

f = open("abc.txt", "r")
print("After WriteLines:")
print(f.read())
f.close()
print()

# 18. rename()

f = open("abcd.txt", "w")
f.close()
os.rename("abcd.txt", "abc1.txt")

# 19. remove()

if os.path.exists("abc1.txt"):
    os.remove("abc1.txt")
else:
    print("File not found")
