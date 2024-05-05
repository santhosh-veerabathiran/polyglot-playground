#include<stdio.h>

int main() {

    int num = 0, n = 0, count = 0, c = 0, rem = 0, mul = 1, sum = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    n = num;

    while(n > 0) {

        count++;
        n /= 10;
    }

    c = count;
    n = num;

    while(n > 0) {

        rem = n % 10;

        while(count > 0) {

            mul *= rem;
            count--;
        }

        sum += mul;
        mul = 1;
        count = c;
        n /= 10;
    }

    if(sum == num) {

        printf("%d is a armstrong number", num);
    }
    else {

        printf("%d is not a armstrong number", num);
    }

    return 0;
}