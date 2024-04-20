#include<stdio.h>

int main() {
    
    float celsius = 0, fahrenheit = 0;

    printf("Enter temperature in celsius: ");
    scanf("%f", &celsius);

    fahrenheit = (9.0/5.0 * celsius) + 32;

    printf("Temperature in fahrenheit: %f", fahrenheit);

    return 0;
}