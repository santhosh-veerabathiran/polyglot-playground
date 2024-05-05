#include<stdio.h>

int main() {
    
    float fahrenheit = 0, celsius = 0;

    printf("Enter temperature in fahrenheit: ");
    scanf("%f", &fahrenheit);

    celsius = (fahrenheit - 32) * 5.0/9.0;

    printf("Temperature in celsius: %f", celsius);

    return 0;
}