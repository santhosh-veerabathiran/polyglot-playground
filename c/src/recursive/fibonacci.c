#include <stdio.h>

int fibo(int n) {
    if (n == 0 || n == 1) {
        return n;
    }

    return fibo(n - 1) + fibo(n - 2);
}

int main() {
    int num = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Fibonacci series for given numbers: ");

    for (int i = 0; i < num; i++) {
        printf("%d ", fibo(i));
    }

    return 0;
}
