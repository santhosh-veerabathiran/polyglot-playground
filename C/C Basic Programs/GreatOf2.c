#include<stdio.h>

int main() {

    int num1 = 0, num2 = 0;

    printf("Enter two numbers: \n");
    scanf("%d%d", &num1, &num2);

    if(num1>num2) {
        printf("%d is greater than %d", num1, num2);
    }
    else {
        printf("%d is greater than %d", num2, num1);
    }

    return 0;
}
