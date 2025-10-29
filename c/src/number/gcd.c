#include <stdio.h>

int main() {
    int num1 = 0, num2 = 0, min = 0, gcd = 0;

    printf("Enter two positive numbers: ");
    scanf("%d %d", &num1, &num2);

    min = (num1 < num2) ? num1 : num2;

    for (int i = 1; i <= min; i++) {

        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }

    printf("The GCD of %d and %d is %d", num1, num2, gcd);

    return 0;
}
