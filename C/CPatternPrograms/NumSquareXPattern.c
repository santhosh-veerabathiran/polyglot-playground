#include<stdio.h>

int main() {

    int num = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    if(num % 2 == 0) {

        num++;
    }

    for(int i = 1; i <= num; i++) {

        for(int j = 1; j <= num; j++) {

            if(j == i || j == num-(i-1)|| j == 1 || j == num) {
                
                printf("%d ", i);
            }
            else if(i == 1 || i == num) {
                
                printf("%d ", j);
            }
            else {

                printf("  ");
            }
        }
        printf("\n");
    }

    return 0;
}