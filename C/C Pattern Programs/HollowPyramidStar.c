#include<stdio.h>

int main() {

    int n = 0;

    printf("Enter a number: ");
    scanf("%d", &n);

    for(int i = 1; i <= n; i++) {

        for(int j = 1; j <= (2*n) - 1; j++) {
            
            if(i == 1 && j == n || i == n){
                
                printf("* ");
            }
            else if(j == n - i + 1 || j == n + i - 1) {
                
                printf("* ");
            }
            else {
               
               printf("  "); 
            }
        }
        printf("\n");
    }

    return 0;
}