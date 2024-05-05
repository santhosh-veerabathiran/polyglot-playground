#include<stdio.h>

int main() {
    
    int num = 0, n = 0, len = 0, rem = 0, sum = 0;
    
    printf("Enter a number: ");
    scanf("%d",&num);
    
    n = num;

    while(n > 0) {
        
        n /= 10;
        len++;
    }
    
    n = num;

    while(n > 0) {
        
        rem = n % 10;
        int i = len--;
        int mul = 1;

        while(i > 0) {
            mul *= rem;
            i--;
        }

        sum += mul;
        n /= 10;
    }

    if(sum == num) {
        printf("%d is a disarium number", num);
    }    
    else {
        printf("%d is not a disarium number", num);
    }

    return 0;
}