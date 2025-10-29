#include <stdio.h>

int main() {
    int   n = 0, sum = 0;
    float avg = 0;

    printf("Enter value of n: ");
    scanf("%d", &n);

    int a[n];

    for (int i = 0; i < n; i++) {
        printf("Enter number %d:", (i + 1));
        scanf("%d", &a[i]);
    }

    for (int i = 0; i < n; i++) {
        sum += a[i];
    }

    avg = (float) sum / n;
    printf("Average of %d numbers is %f", n, avg);

    return 0;
}
