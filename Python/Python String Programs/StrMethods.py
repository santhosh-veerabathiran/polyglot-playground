# 1. capitalize()

str1 = "virat kohli"
print("String:", str1)
print("Capitalize:", str1.capitalize())
print()

# 2. casefold()

str2 = "VIRAT KOHLI"
print("String:", str2)
print("Case fold:", str2.casefold())
print()

# 3. center(width[,fill_char])

str3 = "Virat Kohli"
print("String:", str3)
print("Center:", str3.center(20))
print("Center with '@':", str3.center(15,'@'))
print()

# 4. count(sub[,start[,end]])

str4 = "An original is worth more than a copy"
print("String:", str4)
print("Count of 'o':", str4.count('o'))
print("Count of 'r' from index 12:", str4.count('r',12))
print("Count of 'i' from index 6 to 18:", str4.count('i',3,15))
print()

# 5. encode(encoding='utf-8',errors='strict')

str5 = "Virat Kohli"
print("String:", str5)
str6 = []
str6.append(str5.encode())
str6.append(str5.encode('utf-16','strict'))
str6.append(str5.encode('utf-32','ignore'))
print("Encoded string:", str6[0])
print("Encoded string (UTF-16):", str6[1])
print("Encoded string (UTF-32):", str6[2])
print()

# 6. decode(encoding='utf-8',errors='strict')

print("Decoded string:",str6[0].decode())
print("Decoded string (UTF-16):",str6[1].decode('utf-16','strict'))
print("Decoded string (UTF-32):",str6[2].decode('utf-32','ignore'))
print()

# 7. endswith(suffix[,start[,end]])

str7 = "Sachin Tendulkar"
print("String:", str7)
print("Is ends with 'r':",str7.endswith('r'))
print("Is ends with 'in' from index 6:",str7.endswith('in',6))
print("Is ends with 'in' from index 2 to 5:",str7.endswith('in',2,6))
print()

# 8. expandtabs(tabsize=8)

str8 = "Chinna\tThala\tSuresh\tRaina"
print(str8)
print("Expand tabs:",str8.expandtabs())
print("Expand tabs (15):",str8.expandtabs(15))
print()

# 9. find(sub[,start[,end]])

str9 = "An original is worth more than a copy"
print("String:", str9)
print("'mo' found at:", str9.find('mo'))
print("'or' found at (from 5):", str9.find('or',5))
print("'th' found at (from 5 to 20):", str9.find('th',5,20))
print("'the' found at:", str9.find('the'))
print()

# 10. format(*agrs,**kwargs)

str10 = ["Tom",'Jerry']
print("Strings:", str10)
print("{} and {} both are best friends".format(str10[0],str10[1]))
print("{1} and {0} both are best friends".format(str10[0],str10[1]))

num1=20
print("Decimal: {:d}".format(num1))
print("Hex: {:x}".format(num1))
print("Octal: {:o}".format(num1))
print("Binary: {:b}".format(num1))

num2=2000000000
print("Decimal: {:,}".format(num2))
print("Percentage: {:.2%}".format(3/5))
print()

# 11. format_map(mapping)

str11 = {"F1":"Tom","F2":"Jerry"}
print("Strings:", str11)
print("{F1} and {F2} both are best friends".format_map(str11))
print()

# 12. index(sub[,start[,end]])

str12 = "An original is worth more than a copy"
print("String:", str12)
print("'mo' found at:", str12.index('mo'))
print("'or' found at (from 5):", str12.index('or',5))
print("'th' found at (from 5 to 20):", str12.index('th',5,20))
try:
    print("'the' found at:", str12.index('the'))
except ValueError:
    print("Value Error")
print()

# 13. isalnum()

str13 = ['kohli','kohli18','18','kohli 18']
print("Strings:", str13)
print(str13[0].isalnum()) # True
print(str13[1].isalnum()) # True
print(str13[2].isalnum()) # True
print(str13[3].isalnum()) # 
print()

# 14. isalpha()

str14 = ['kohli','kohli18','18','virat kohli']
print("Strings:", str14)
print(str14[0].isalpha()) # True
print(str14[1].isalpha()) # False
print(str14[2].isalpha()) # False
print(str14[3].isalpha()) # False
print()

# 15. isascii()

str15 = ['kohli','kohli18','\u00e2','\u00f8']
print("Strings:", str15)
print(str15[0].isascii()) # True
print(str15[1].isascii()) # True
print(str15[2].isascii()) # False
print(str15[3].isascii()) # False
print()

# 16. isdecimal()

str16 = ['kohli','18','18.5','\u0030'] #'\u0030' - unicode for 0
print("Strings:", str16)
print(str16[0].isdecimal()) # False
print(str16[1].isdecimal()) # True
print(str16[2].isdecimal()) # False
print(str16[3].isdecimal()) # True
print()

# 17. isdigit()

str17 = ['kohli','18','\u0030','\u00B2'] #'\u00B2' - unicode for 2(superscript)
print("Strings:", str17)
print(str17[0].isdigit()) # False
print(str17[1].isdigit()) # True
print(str17[2].isdigit()) # True
print(str17[3].isdigit()) # True
print()

# 18. isidentifier()

str18 = ['kohli_18','18_Kohli','_Kohli18','kohli 18'] #'/u00BD' - unicode for 1/2
print("Strings:", str18)
print(str18[0].isidentifier()) # True
print(str18[1].isidentifier()) # False
print(str18[2].isidentifier()) # True
print(str18[3].isidentifier()) # False
print()

# 19. islower()

str19 = ['kohli','KOHLI','kohli18','Kohli_18']
print("Strings:", str19)
print(str19[0].islower()) # True
print(str19[1].islower()) # False
print(str19[2].islower()) # True
print(str19[3].islower()) # False
print()

# 20. isnumeric()

str20 = ['kohli','18','\u00BD','\u00B2'] #'/u00BD' - unicode for 1/2
print("Strings:", str20)
print(str20[0].isnumeric()) # False
print(str20[1].isnumeric()) # True
print(str20[2].isnumeric()) # True
print(str20[3].isnumeric()) # True
print()

# 21. isprintable()

str21 = ['kohli','18','virat\n','\t']
print("Strings:", str21)
print(str21[0].isprintable()) # True
print(str21[1].isprintable()) # True
print(str21[2].isprintable()) # False
print(str21[3].isprintable()) # False
print()

# 22. isspace()

str22 = ['virat',' ','\r\n','\v\t']
print("Strings:", str22)
print(str22[0].isspace()) # False
print(str22[1].isspace()) # True
print(str22[2].isspace()) # True
print(str22[3].isspace()) # True
print()

# 23. istitle()

str23 = ['Virat Kohli','virat','Virat','virat kohli']
print("Strings:", str23)
print(str23[0].istitle()) # True
print(str23[1].istitle()) # False
print(str23[2].istitle()) # True
print(str23[3].istitle()) # false
print()

# 24. isupper()

str24 = ['kohli','KOHLI','KOHLI18','Kohli_18']
print("Strings:", str24)
print(str24[0].isupper()) # False
print(str24[1].isupper()) # True
print(str24[2].isupper()) # True
print(str24[3].isupper()) # False
print()

# 25. join(iterable)

str25 = ":"
list1=['1','3','5']
print("String:", str25)
print("List:", list1)
print("Join:", str25.join(list1))
print()

# 26. len(string)

str26 = "Mahendra Singh Dhoni"
print("String:", str26)
print("Length:", len(str26))
print()

# 27. ljust(width[,fillchar])

str27 = "Virat Kohli"
print("String:", str27)
print("Left justify:", str27.ljust(20))
print("Left justify with '@':", str27.ljust(20,'@'))
print()

# 28. lower()

str28 = "Virat Kohli"
print("String:", str28)
print("lower:", str28.lower())
print()

# 29. lstrip([chars])

str29 = ['     Virat Kohli     ','@@@@@Virat Kohli@@@@@']
print("Strings:", str29)
print("Left strip:", str29[0].lstrip())
print("Left strip '@':", str29[1].lstrip('@'))
print()

# 30. maketrans(x[,y,z])

trans1 = str.maketrans({"a":"A",'b':'B',"c":'C'})
print("Maketrans:", trans1)
trans2 = str.maketrans('ijk',"IJK")
print("Maketrans:", trans2)
trans3 = str.maketrans('mno',"MNO","rst")
print("Maketrans:", trans3)
print()

# 31. partition(sep)

str31 = "An original is worth more than a copy"
print("String:", str31)
print("Partition 'is':", str31.partition('is'))
print()

# 32. replace(old,new[,count])

str32 = "An original is worth more than a copy"
print("String:", str32)
print("Replace 'or' with 'is':", str32.replace('or','is'))
print("Replace 'or' with 'is' (first 2 occurs):", str32.replace("or",'is',2))
print()

# 33. rfind(sub[,start[,end]])

str33 = "An original is worth more than a copy"
print("String:", str33)
print("'mo' found at:", str33.rfind('mo'))
print("'or' found at (from 5):", str33.rfind('or',5))
print("'th' found at (from 5 to 20):", str33.rfind('th',5,20))
print("'the' found at:", str33.rfind('the'))
print()

# 34. rindex(sub[,start[,end]])

str34 = "An original is worth more than a copy"
print("String:", str34)
print("'mo' found at:", str34.rindex('mo'))
print("'or' found at (from 5):", str34.rindex('or',5))
print("'th' found at (from 5 to 20):", str34.rindex('th',5,20))
try:   
    print("'the' found at:", str34.rindex('the'))
except ValueError:
    print("Value Error")
print()

# 35. rjust(width[,fillchar])

str35 = "Virat Kohli"
print("String:", str35)
print("Right justify:", str35.rjust(20))
print("Right justify with '@':", str35.rjust(20,'@'))
print()

# 36. rpartition(sep)

str36 = "An original is worth more than a copy"
print("String:", str36)
print("Rpartition 'is':", str36.rpartition('is'))
print()

# 37. rsplit(sep=None,maxsplit=-1)

str37 = "An original is worth more than a copy"
print("String:", str37)
print("Right Split:", str37.rsplit())
print("Right Split with 'o':", str37.rsplit('o'))
print("Right Split with 'o'(3):", str37.rsplit('o',3))
print()

# 38. rstrip([chars])

str38 = ['     Virat Kohli     ','@@@@@Virat Kohli@@@@@']
print("Strings:", str38)
print("Right strip:", str38[0].rstrip())
print("Right strip '@':", str38[1].rstrip('@'))
print()

# 39. split(sep=None,maxsplit=-1)

str39 = "An original is worth more than a copy"
print("String:", str39)
print("Split:", str39.split())
print("Split with 'o':", str39.split('o'))
print("Split with 'o' (3):", str39.split('o',3))
print()

# 40. splitlines([keeplinebreaks])

str40 = "An original is worth \n more than a copy"
print("String:", str40)
print("Split:", str40.splitlines())
print("Split('True'):", str40.splitlines(True))
print()

# 41. startswith(suffix[,start[,end]])

str41 = "Sachin Tendulkar"
print("String:", str41)
print("Is starts with 'S':",str41.startswith('S'))
print("Is starts with 'in' from index 6:",str41.startswith('in',6))
print("Is starts with 'en' from index 8 to 12:",str41.startswith('en',8,12))
print()

# 42. strip([chars])

str42 = ['     Virat Kohli     ','@@@@@Virat Kohli@@@@@']
print("Strings:", str42)
print("Strip:", str42[0].strip())
print("Strip '@':", str42[1].strip('@'))
print()

# 43. swapcase()

str43 = "Virat Kohli"
print("String:", str43)
print("Swapcase:", str43.swapcase())
print()

# 44. title()

str44 = "An original is worth more than a copy"
print("String:", str44)
print("Title:", str44.title())
print()

# 45. translate(table)

str45 = "An original is worth more than a copy"
print("String:", str45)
print("Translate:", str45.translate(trans1))
print("Translate:", str45.translate(trans2))
print("Translate:", str45.translate(trans3))

# 46. upper()

str46 = "Virat Kohli"
print("String:", str46)
print("Upper:", str46.upper())
print()

# 47. zfill(width)

str47 = "Virat Kohli"
print("String:", str47)
print("ZFill:", str47.zfill(20))
print()