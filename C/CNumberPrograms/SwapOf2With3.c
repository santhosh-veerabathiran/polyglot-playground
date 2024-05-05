#include<stdio.h>

void swap (int *n1, int *n2) {

    int n3 = 0;

    n3 = *n1;
    *n1 = *n2;
    *n2 = n3;
}
int main() {

    int num1 = 0, num2 = 0;

    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    printf("Before swap: \nNum1: %d\tNum2: %d", num1, num2);

    swap(&num1, &num2);

    printf("\nAfter swap: \nNum1: %d\tNum2: %d", num1, num2);

    return 0;
}