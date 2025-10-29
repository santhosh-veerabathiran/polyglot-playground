#include <stdio.h>

void swap(int *n1, int *n2) {
    int n3 = 0;

    n3  = *n1;
    *n1 = *n2;
    *n2 = n3;
}

int main() {
    int size = 0;

    printf("Enter array size: ");
    scanf("%d", &size);

    int a[size];

    printf("Enter array elements: \n");
    for (int i = 0; i < size; i++) {
        scanf("%d", &a[i]);
    }

    for (int i = 0; i < size - 1; i++) {

        int posi = i;

        for (int j = i + 1; j < size; j++) {

            if (a[j] < a[posi]) {
                posi = j;
            }
        }

        swap(&a[i], &a[posi]);
    }

    printf("Sorted array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", a[i]);
    }

    return 0;
}
