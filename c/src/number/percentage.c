#include <stdio.h>

int main() {
    int mark[5];

    for (int i = 0; i < 5; i++) {
        printf("Enter mark %d:", (i + 1));
        scanf("%d", &mark[i]);
    }

    int sum = 0;

    for (int i = 0; i < 5; i++) {
        sum += mark[i];
    }

    float percentage = (float) sum / 5;
    printf("Percentage: %.2f%%", percentage);

    return 0;
}
