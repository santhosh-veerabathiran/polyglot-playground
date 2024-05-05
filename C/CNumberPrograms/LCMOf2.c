#include<stdio.h>

int main() {
    int num1 = 0, num2 = 0, max = 0, step = 0, lcm = 0;

    printf("Enter two positive numbers: ");
    scanf("%d %d", &num1, &num2);

    max = step = (num1 > num2) ? num1 : num2;

    while(1) {
        if(max % num1 == 0 && max % num2 ==0) {
            lcm = max;
            break;
        }
        max += step;
    }

    printf("The LCM of %d and %d is %d", num1, num2, lcm);
    
    return 0;
}