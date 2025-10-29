#include <stdio.h>

int main() {
    int num = 0, square = 0, sum = 0, rem = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    square = num * num;

    while (square > 0) {
        rem = square % 10;
        sum += rem;
        square /= 10;
    }

    if (num == sum) {
        printf("%d is a neon number", num);
    } else {
        printf("%d is not a neon number", num);
    }

    return 0;
}
