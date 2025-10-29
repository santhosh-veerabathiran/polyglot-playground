#include <stdio.h>

int main() {
    int i = 0, size = 0, key = 0, low = 0, mid = 0, high = 0;

    printf("Enter array size: ");
    scanf("%d", &size);

    int a[size];

    printf("Enter array elements: \n");
    for (i = 0; i < size; i++) {
        scanf("%d", &a[i]);
    }

    printf("Enter key element that is to be searched: ");
    scanf("%d", &key);

    high = size - 1;

    while (low <= high) {

        mid = (low + high) / 2;

        if (key == a[mid]) {
            printf("%d is found at index: %d", key, mid);
            break;
        }

        key > a[mid] ? (low = mid + 1) : (high = mid - 1);
    }

    if (low > high) {
        printf("%d is not found", key);
    }

    return 0;
}
