#include<stdio.h>

int main() {

    int size = 0;

    printf("Enter array size: ");
    scanf("%d", &size);

    int a[size];

    printf("Enter array elements: \n");
    
    for(int i = 0; i < size; i++) {
        
        scanf("%d", &a[i]);
    }

    for(int i = 1; i < size; i++) {

        for(int j = 0; j < size - i; j++) {

            if(a[j] > a[j + 1]) {

                int n = a[j];
                a[j] = a[j + 1];
                a[j + 1] = n;
            }
        }
    }

    printf("Sorted array: ");
    
    for(int i = 0; i < size; i++) {
        
        printf("%d ", a[i]);
    }

    return 0;
}