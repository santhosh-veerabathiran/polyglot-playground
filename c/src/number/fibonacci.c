#include <stdio.h>

int main() {
    int a = 0, b = 1, c = 0, num = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Fibonacci series for given numbers: %d %d", a, b);

    for (int i = 3; i <= num; i++) {
        c = a + b;

        printf(" %d", c);

        a = b;
        b = c;
    }

    return 0;
}
