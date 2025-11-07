num = int(input("Enter a number: "))

n = num
sum = 0

while n > 0:
    rem = n % 10
    sum += rem
    n //= 10

print("Sum of digits of", num, "is", sum)
