#include<stdio.h>

int main() {

    int num = 0, n = 0, rem = 0, sum = 0, prod = 1;

    printf("Enter a number: ");
    scanf("%d", &num);

    n = num;

    while(n>0) {
        
        rem = n % 10;
        sum += rem;
        prod *= rem;
        n /=10;
    }

    if (sum == prod) {

        printf("%d is a spy number", num);
    }
    else {
        
        printf("%d is not a spy number",num);
    }

    return 0;
}