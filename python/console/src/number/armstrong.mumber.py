num = int(input("Enter a number: "))

n = num
count = 0

while n > 0:
    count += 1
    n //= 10

c = count
n = num
sum = 0

while n > 0:
    rem = n % 10
    mul = 1

    while count > 0:
        mul *= rem
        count -= 1

    sum += mul
    count = c
    n //= 10

if sum == num:
    print(num, "is a armstrong number")
else:
    print(num, "is not a armstrong number")
