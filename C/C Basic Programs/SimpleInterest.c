#include<stdio.h>

int main() {

    float amount = 0, rate = 0, time = 0, si = 0;

    printf("Enter principal amount: ");
    scanf("%f", &amount);

    printf("Enter rate of interest: ");
    scanf("%f", &rate);

    printf("Enter period of time: ");
    scanf("%f", &time);

    si = (amount * rate * time) / 100;
    printf("Simple interest: %f",si);

    return 0;
}