#include<stdio.h>

int main() {
    
    const float PI = 3.14;
    
    float radius = 0;
    printf("Enter radius of a circle: ");
    scanf("%f", &radius);
    
    float circum = 2 * PI * radius;
    printf("\nCircumference of circle is %f", circum);

    return 0;
}