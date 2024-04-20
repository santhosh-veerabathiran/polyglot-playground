#include<stdio.h>

int main() {

    int i = 0, j = 0, size = 0;

    printf("Enter array size: ");
    scanf("%d", &size);

    int a[size];

    printf("Enter array elements: \n");
    
    for(int i = 0; i < size; i++) {
        
        scanf("%d", &a[i]);
    }

    for(i = 1; i < size; i++) {

        int n = a[i];
        
        for(j = i; j > 0 && a[j - 1] > n; j--) {

           a[j] = a[j - 1];  
        }

        a[j] = n;
    }

    printf("Sorted array: ");
    
    for(int i = 0; i < size; i++) {
        
        printf("%d ", a[i]);
    }

    return 0;
}