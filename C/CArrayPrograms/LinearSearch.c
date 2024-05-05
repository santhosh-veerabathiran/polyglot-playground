#include<stdio.h>

int main() {
    
    int i = 0, size = 0, key = 0;

    printf("Enter array size: ");
    scanf("%d", &size);

    int a[size];

    printf("Enter array elements: \n");

    for(i = 0; i < size; i++) {

        scanf("%d", &a[i]);
    }

    printf("Enter key element that is to be searched: ");
    scanf("%d", &key);

    for(i = 0; i < size; i++) {

        if(a[i] == key) {

            printf("%d is found at index: %d", key, i);
            break;
        }
    }

    if(i == size) {
        
        printf("%d is not found", key);
    }

    return 0;
}