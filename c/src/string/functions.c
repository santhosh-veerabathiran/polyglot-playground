#include <stdio.h>
#include <string.h>

char *strlwr(char *str) {
    int len = strlen(str);

    for (int i = 0; i < len; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            str[i] = str[i] + 32;
        }
    }

    return str;
}

char *strupr(char *str) {
    int len = strlen(str);

    for (int i = 0; i < len; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            str[i] = str[i] - 32;
        }
    }

    return str;
}

void swap(char *c1, char *c2) {
    char temp = 0;

    temp = *c1;
    *c1  = *c2;
    *c2  = temp;
}

char *strrev(char *str) {
    int len = strlen(str);

    for (int i = 0, j = len - 1; i < j; i++, j--) {
        swap(&str[i], &str[j]);
    }

    return str;
}

int main() {
    char str1[50], str2[50], str3[50];
    int  len1 = 0, len2 = 0, cmp = 0;

    printf("Enter the string 1: ");
    fgets(str1, sizeof(str1), stdin);

    printf("Enter the string 2: ");
    scanf("%[^\n]s", str2);

    printf("String 1: ");
    puts(str1);

    printf("String 2: %s\n", str2);

    // Length
    len1 = strlen(str1);
    printf("\nLength of string 1: %d\n", len1);

    len2 = strlen(str2);
    printf("Length of string 2: %d\n", len2);

    // Copy
    strcpy(str3, str1);
    printf("String 3: %s\n", str3);

    // Concatenation
    strcat(str1, str2);
    printf("String 1: %s\n", str1);

    // Compare
    cmp = strcmp(str1, str2);
    printf("Comparison: %d\n", cmp);

    // Lowercase
    printf("Lower String 1: %s\n", strlwr(str1));

    // Uppercase
    printf("Upper String 1: %s\n", strupr(str1));

    // Reverse
    printf("Reverse String 1: %s\n", strrev(str1));

    // Substring
    printf("Substring: %s\n", strchr(str3, str3[3]));
    printf("Substring: %s\n", strstr(str3, str2));

    return 0;
}
