#include<stdio.h>

long fact(int n) {

    if(n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * fact(n-1);
    }
}
int main() {

    int num = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Factorial of %d is %ld", num, fact(num));

    return 0;
}