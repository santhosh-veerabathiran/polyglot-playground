#include<stdio.h>

int main() {

    float base_sal = 0, hra = 0, da = 0, gross_sal = 0; 

    printf("Enter base salary of the employee: ");
    scanf("%f", &base_sal);

    hra = base_sal * 18 / 100;
    da = base_sal * 15 / 100;

    gross_sal = base_sal + hra + da;
    printf("Gross salary: %f", gross_sal);

    return 0;
}