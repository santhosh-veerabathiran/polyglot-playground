#include<stdio.h>
#include<string.h>

int main() {
    
    char str[100], rev[100];

    printf("Enter a  string: ");
    scanf("%[^\n]s", &str);

    strcpy(rev, str);
    strrev(rev);

    if(strcmp(rev, str) == 0) {

        printf("%s is a palindrome string", str);
    }
    else {

        printf("%s is not a palindrome string", str);
    }

    return 0;
}