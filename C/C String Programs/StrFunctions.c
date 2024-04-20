#include<stdio.h>
#include<string.h>

int main() {
    
    char str1[50], str2[50], str3[50];
    int len1 = 0, len2 = 0, cmp = 0;  
    
    printf("Enter the string 1: ");
    gets(str1);

    printf("Enter the string 2: ");
    scanf("%[^\n]s", &str2);

    printf("String 1: ");
    puts(str1);

    printf("String 2: %s\n", str2);
 
    //Length
    len1 = strlen(str1);
    printf("\nLength of string 1: %d\n", len1); 
    
    len2 = strlen(str2);   
    printf("Length of string 2: %d\n", len2);
    
    //Copy
    strcpy(str3, str1); 
    printf("String 3: %s\n", str3); 

    //Concatenation
    strcat(str1, str2); 
    printf("String 1: %s\n", str1);

    //Compare
    cmp = strcmp(str1, str2); 
    printf("Comparison: %d\n", cmp);

    //Lowercase
    printf("Lower String 1: %s\n", strlwr(str1));

    //Uppercase
    printf("Upper String 1: %s\n", strupr(str1));

    //Reverse
    printf("Reverse String 1: %s\n", strrev(str1));

    //Substring
    printf("Substring: %s\n",strchr(str3, str3[3]));
    printf("Substring: %s\n", strstr(str3, str2));

    return 0;    
}
