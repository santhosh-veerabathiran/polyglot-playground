#include <stdio.h>

int main() {
    float base = 0;
    printf("Enter base of the triangle: ");
    scanf("%f", &base);

    float height = 0;
    printf("Enter height of the triangle: ");
    scanf("%f", &height);

    float area = (base * height) / 2;
    printf("Area of a triangle is %f", area);

    return 0;
}
