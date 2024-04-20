str = input("Enter a string: ")

rev = str[::-1]

if rev == str:
    print(str,"is a palindrome string")
else:
    print(str,"is not a palindrome string")