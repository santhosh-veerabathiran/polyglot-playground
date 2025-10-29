#include <stdio.h>

void swap_with_third_var(int *n1, int *n2) {
    int n3 = 0;

    n3  = *n1;
    *n1 = *n2;
    *n2 = n3;
}

void swap_without_third_var(int *n1, int *n2) {
    *n1 = *n1 + *n2;
    *n2 = *n1 - *n2;
    *n1 = *n1 - *n2;
}

int main() {
    int num1 = 0, num2 = 0;

    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    printf("Before swap: \nNum1: %d\tNum2: %d", num1, num2);

    swap_with_third_var(&num1, &num2);

    printf("\nAfter swap with using third variable: \nNum1: %d\tNum2: %d", num1, num2);

    swap_without_third_var(&num1, &num2);

    printf("\nAfter swap without using third variable: \nNum1: %d\tNum2: %d", num1, num2);

    return 0;
}
