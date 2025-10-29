#include<stdio.h>

int main() {
    char fname[20], mname[20], lname[20];

    printf("Enter the first name: ");
    scanf("%s", fname);

    printf("Enter the middle name: ");
    scanf("%s", mname);

    printf("Enter the last name: ");
    scanf("%s", lname);

    printf("Abbreviated name: %c. %c. %s", fname[0], mname[0], lname);

    return 0;
}
