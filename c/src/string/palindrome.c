#include <stdio.h>
#include <string.h>

void swap(char *c1, char *c2) {
    char temp = 0;

    temp = *c1;
    *c1  = *c2;
    *c2  = temp;
}

void strrev(char *str) {
    int len = strlen(str);

    for (int i = 0, j = len - 1; i < j; i++, j--) {
        swap(&str[i], &str[j]);
    }
}

int main() {
    char str[100], rev[100];

    printf("Enter a  string: ");
    scanf("%[^\n]", str);

    strcpy(rev, str);
    strrev(rev);

    if (strcmp(rev, str) == 0) {
        printf("%s is a palindrome string", str);
    } else {
        printf("%s is not a palindrome string", str);
    }

    return 0;
}
