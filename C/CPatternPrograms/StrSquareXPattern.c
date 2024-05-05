#include<stdio.h>
#include<string.h>

int main() {

    char str[100];

    printf("Enter a string: ");
    scanf("%[^\n]s", str);

    int len = strlen(str);

    if(len % 2 == 0) {

        strcat(str, " ");
        len++;
    }

    for(int i = 1; i <= len; i++) {

        for(int j = 1; j <= len; j++) {

            if(j == i || j == len-(i-1)|| j == 1 || j == len) {

                printf("%c ", str[i-1]);
            }
            else if(i == 1 || i == len) {

                printf("%c ", str[j-1]);
            }
            else {

                printf("  ");
            }
        }
        printf("\n");
    }

    return 0;
}
