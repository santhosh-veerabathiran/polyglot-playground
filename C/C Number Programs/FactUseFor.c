#include<stdio.h>

int main() {

    int num = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    long fact = 1;
    
    for(int i = 1; i <= num; i++) {
        fact *= i;
    }

    printf("Factorial of %d is %ld", num, fact);

    return 0;
}