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

    for(int i = 0; i < size - 1; i++) {

        int posi = i;
        
        for(int j = i + 1; j < size; j++) {

            if(a[j] < a[posi]) {
                
                posi = j;
            }
        }
        
        int n = a[i];
        a[i] = a[posi];
        a[posi] = n;
    }

    printf("Sorted array: ");
    
    for(int i = 0; i < size; i++) {
        
        printf("%d ", a[i]);
    }

    return 0;
}