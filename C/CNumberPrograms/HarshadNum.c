#include<stdio.h>

int main() {

    int num = 0, n = 0, rem = 0, sum = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    n = num;

    while(n > 0) {

        rem = n % 10;
        sum +=rem;
        n /= 10;
    }

    if(num % sum == 0) {
        printf("%d is a harshad number", num);
    }
    else {
        printf("%d is not a harshad number", num);
    }

    return 0;
}