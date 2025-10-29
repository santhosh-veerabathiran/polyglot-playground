#include <stdio.h>

int main() {
    int num = 0, rev = 0, rem = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    while (num > 0) {

        rem = num % 10;
        rev = (rev * 10) + rem;
        num /= 10;
    }

    printf("Reversed number: %d", rev);

    return 0;
}
