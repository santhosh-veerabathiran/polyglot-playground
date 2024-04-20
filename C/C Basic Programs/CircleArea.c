#include<stdio.h>

int main() {
    
    const float PI = 3.14;
    
    float radius = 0;
    printf("Enter radius of a circle: ");
    scanf("%f", &radius);

    float area = PI * radius * radius;
    printf("Area of circle is %f", area);

    return 0;
}