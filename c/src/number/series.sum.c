#include <stdio.h>

int main() {
    int num = 0, n = 0, sum = 0, rem = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    n = num;

    while (n > 0) {

        rem = n % 10;
        sum += rem;
        n /= 10;
    }

    printf("Sum of digits of %d is %d", num, sum);

    return 0;
}
