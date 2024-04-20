#include<stdio.h>

int main() {

    int num = 0, n = 0, rem = 0, rev = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    n = num;

    while(n > 0) {
        
        rem = n % 10;
        rev = (rev * 10) + rem;
        n /= 10;
    }

    if(rev == num) {
        
        printf("%d is a palindrome number", num);
    }
    else {
        
        printf("%d is not a palindrome number", num);
    }

    return 0;
}